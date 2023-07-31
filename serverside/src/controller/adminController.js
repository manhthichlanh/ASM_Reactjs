import axios from "axios";
import { geneToken, extractToken } from "../configs/jwt";
import moment from "moment";


const getHome = (req, res) => {
  res.render("admin/layout.ejs", { currentPage: { name: "home", href: "home" } });
}
const getLogout = (req, res) => {
  res.clearCookie('refreshToken');
  res.redirect('/admin/login')
}

const getLogin = (req, res) => {
  res.render("admin/login", { port: process.env.PORT });
}
const postLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await axios.post(`http://localhost:${process.env.PORT}/user/login`, { username, password });
    const user = response.data.user;
    if (user.role === 0) return res.status(401).json({ message: "Login Fail" })
    // Xử lý dữ liệu trả về từ API tại đây

    // res.status(201).json({message: "Login successfully!", data:data.user})

    const accessToken = geneToken(user, "200s");
    const refreshToken = geneToken(user, 86400);

    res
      .status(201)
      .cookie('refreshToken', refreshToken)
      .json({ message: "Login Successfully!", accessToken })

  } catch (error) {
    console.log(error)
    if (error.response.status) {
      const status = error.response.status;
      const errorMessage = error.response.data.message;
      res.status(status).json({ message: errorMessage });
    } else {
      res.status(501);
    }

  }
}

//Categories CRUD
const getCategoryData = async (req, res) => {

  const itemsPerPage = req.query?.limit || 5;

  const page = Number(req.query?.page) || 1;

  const search = req.query.search;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;


  try {
    const response = await axios.get(`http://localhost:${process.env.PORT}/category/read`);
    const data = response.data;

    let itemOnCurrentPage = data.data;//item trong trang hiện tại

    let totalPages = 0;

    if (search) {

      itemOnCurrentPage = itemOnCurrentPage.filter(item => {
        return item.categoryName?.toLowerCase().includes(search?.toLowerCase());
      })

      totalPages = Math.ceil(itemOnCurrentPage.length / itemsPerPage);

    } else {

      totalPages = Math.ceil(data.data.length / itemsPerPage);

    }

    itemOnCurrentPage = itemOnCurrentPage.slice(startIndex, endIndex);


    const exportDatas = {
      itemList: itemOnCurrentPage,
      totalPages: totalPages,
      currentPage: page,
    }

    res.render('admin/layout.ejs', { currentPage: { name: "categories", href: "categories" }, data: exportDatas });
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }
}
const getUpdateCate = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`http://localhost:${process.env.PORT}/category/read/${id}`);
    const data = response.data;
    res.render('admin/layout.ejs', { currentPage: { name: "editCate", href: "categories" }, data: data.data });
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }

}
const postUpdateCate = async (req, res) => {
  const formData = req.body;
  const _id = req.body._id;
  try {
    const response = await axios.put(`http://localhost:${process.env.PORT}/category/update/${_id}`, { ...formData, image: "href" });
    const data = response.data;
    res.redirect("/admin/categories");
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }

}
const getAddNewCate = async (req, res) => {
  res.render('admin/layout.ejs', { currentPage: { name: "addNewCate", href: 'categories' } });
}

const postAddNewCate = async (req, res) => {
  const { categoryName, display, priority } = req.body;
  try {
    const response = await axios.post(`http://localhost:${process.env.PORT}/category/create/`, { categoryName, display, priority, image: 'href' });
    const data = response.data;
    res.redirect('/admin/categories')
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }

}

const deleteCate = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.delete(`http://localhost:${process.env.PORT}/category/delete/${id}`);
    res.redirect('/admin/categories');
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }
}
//Categories CRUD

//Users CRUD
const getUserData = async (req, res) => {
  const itemsPerPage = Number(req.query?.limit) || 5;

  const page = Number(req.query?.page) || 1;

  const search = req.query.search;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  try {
    const response = await axios.get(`http://localhost:${process.env.PORT}/user/read`);
    const data = response.data;

    let itemOnCurrentPage = data.data;//item trong trang hiện tại

    let totalPages = 0;

    if (search) {

      itemOnCurrentPage = itemOnCurrentPage.filter(item => {
        return item.fullname?.toLowerCase().includes(search?.toLowerCase());
      })

      totalPages = Math.ceil(itemOnCurrentPage.length / itemsPerPage);

    } else {

      totalPages = Math.ceil(data.data.length / itemsPerPage);

    }

    itemOnCurrentPage = itemOnCurrentPage.slice(startIndex, endIndex);


    const exportDatas = {
      itemList: itemOnCurrentPage,
      totalPages: totalPages,
      currentPage: page,
    }

    res.render('admin/layout.ejs', { currentPage: { name: "users", href: "users" }, data: exportDatas });
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }
}
const getUpdateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`http://localhost:${process.env.PORT}/user/read/${id}`);
    const data = response.data;
    res.render('admin/layout.ejs', { currentPage: { name: "editUser", href: "users" }, data: data.data });
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }

}

const postUpdateUser = async (req, res) => {

  const formData = req.body;

  const _id = req.body._id;

  try {
    const response = await axios.put(`http://localhost:${process.env.PORT}/user/update/${_id}`, { ...formData });
    const data = response.data;
    res.redirect("/admin/users");
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);

  }

}

const getAddNewUser = async (req, res) => {
  res.render('admin/layout.ejs', { currentPage: { name: "addNewUser", href: 'users' } });
}

const postAddNewUser = async (req, res) => {
  const { username, fullname, email, password, address, phone, active, role } = req.body;
  try {
    const response = await axios.post(`http://localhost:${process.env.PORT}/user/create/`, { username, fullname, email, password, address, phone, active, role });
    const data = response.data;
    res.redirect('/admin/users')
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }

}

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.delete(`http://localhost:${process.env.PORT}/user/delete/${id}`);
    res.redirect('/admin/users');
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }
}
//Users CRUD

//Users CRUD
const getProductsData = async (req, res) => {

  const itemsPerPage = Number(req.query?.limit) || 5;

  const page = Number(req.query?.page) || 1;

  const search = req.query.search;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  try {
    const response = await axios.get(`http://localhost:${process.env.PORT}/product/read`);
    const data = response.data;

    let itemOnCurrentPage = data.data.Products;//item trong trang hiện tại

    let totalPages = 1;

    if (search) {

      itemOnCurrentPage = itemOnCurrentPage.filter(item => {
        return item.productName?.toLowerCase().includes(search?.toLowerCase());
      })

      totalPages = Math.ceil(itemOnCurrentPage.length / itemsPerPage);

    } else {
      totalPages = Math.ceil(data.data.Products.length / itemsPerPage);

    }

    itemOnCurrentPage = itemOnCurrentPage.slice(startIndex, endIndex);

    const exportDatas = {
      itemList: itemOnCurrentPage,
      totalPages,
      currentPage: page,
    }
    // res.json(data)
    res.render('admin/layout.ejs', { currentPage: { name: "products", href: "products" }, data: exportDatas });
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }
}
const getUpdateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`http://localhost:${process.env.PORT}/product/read/${id}`);
    const data = response.data;
    // res.json(data.data);

    res.render('admin/layout.ejs', { currentPage: { name: "editProduct", href: "products" }, data: data.data });
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }

}
const postUpdateProduct = async (req, res) => {
  const _id = req.body._id;
  const { categoryId, productName, price, quantity, color, size, description } = req.body;
  const file = req.file;
  const image = req.protocol + '://' + req.get('host') + '/images/' + file.filename;
  try {
    const response = await axios.put(`http://localhost:${process.env.PORT}/product/update/${_id}`, { categoryId, productName, price, image, quantity, color, size, description });
    const data = response.data;
    res.redirect("/admin/products");
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }

}
const getAddNewProduct = async (req, res) => {
  const response = await axios.get(`http://localhost:${process.env.PORT}/category/read`);
  const data = response.data;
  res.render('admin/layout.ejs', { currentPage: { name: "addNewProduct", href: 'products' }, data: data.data });
}
const postAddNewProduct = async (req, res) => {
  const { categoryId, productName, price, quantity, color, size, description } = req.body;
  const file = req.file;
  const image = req.protocol + '://' + req.get('host') + '/images/' + file.filename;
  try {
    const response = await axios.post(`http://localhost:${process.env.PORT}/product/create/`, { categoryId, productName, price, image, quantity, color, size, description });
    const data = response.data;
    res.redirect('/admin/products')
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }

}
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.delete(`http://localhost:${process.env.PORT}/product/delete/${id}`);
    res.redirect('/admin/products');
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }
}
//Users CRUD

//Order 
const getOrdersData = async (req, res) => {
  const itemsPerPage = req.query?.limit || 5;

  const page = Number(req.query?.page) || 1;

  const search = req.query.search;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  try {
    const response = await axios.get(`http://localhost:${process.env.PORT}/order/read`);
    const data = response.data;

    let itemOnCurrentPage = data.data;//item trong trang hiện tại

    let totalPages = 0;

    if (search) {

      itemOnCurrentPage = itemOnCurrentPage.filter(item => {
        return item.categoryName?.toLowerCase().includes(search?.toLowerCase());
      })

      totalPages = Math.ceil(itemOnCurrentPage.length / itemsPerPage);

    } else {

      totalPages = Math.ceil(data.data.length / itemsPerPage);

    }

    itemOnCurrentPage = itemOnCurrentPage.slice(startIndex, endIndex);


    const exportDatas = {
      itemList: itemOnCurrentPage,
      totalPages: totalPages,
      currentPage: page,
    }
    // res.json(data)
    res.render('admin/layout.ejs', { currentPage: { name: "orders", href: "orders" }, data: exportDatas });
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }
}

const getOrdersDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`http://localhost:${process.env.PORT}/order/read/${id}`);
    const data = response.data.data.cartId.product;

    res.render('admin/layout.ejs', { currentPage: { name: "products", href: "orders" }, data: { itemList: data } });
    // Xử lý dữ liệu trả về từ API tại đây
  } catch (error) {
    console.error(error);
  }
}
const getAnalytic = async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:${process.env.PORT}/order/read`);
    const data = response.data.data;
  
    const exportData = {
      orderData: data,
      orderTotal: data.length,
      orderSuccessTotal: data.reduce((total, value, index, arr) => {
        if (value.status === "Hoàn thành") {
          return total + 1
        }
        return total
      }, 0),
      orderPendingTotal: data.reduce((total, value, index, arr) => {
        if (value.status === "Đang chờ xử lý") {
          return total + 1
        }
        return total
      }, 0),
      grandTotal: data.reduce((total, value, index, arr) => {
        const product = value.cartId.product;
        const productTotal = product.reduce((total, product) => {
          return total + Number(product.price) * Number(product.quantity)
        }, 0)
        return total + productTotal;
      }, 0
      ).toLocaleString("vi-VN")
    }
    const xValue = exportData.orderData.map(item=>{return moment(item.createdAt).format("DD-MM-YYYY hh:mm:ss") });
    // const yValue = exportData.orderData.map(item=>{item.reduce((total,order) => {
    //   return total + order.price * order.quantity
    // }
    // )})
    // console.log({yValue,orderData})
    const chartData = {
      xValue,
      // yValue,
      // minLine,
      // maxLine,
    }
    res
    .render("admin/layout.ejs", {
      currentPage: { name: "analytic", href: "analytic" }, data: exportData
    });

    // console.log(total)
  } catch (error) {
    console.error(error);

  }
 
  
}
const parseJWT = (req,res) => {
    const token = req.params.token;
    const data = extractToken(token)
    res.json(data)
}
module.exports = {
  getHome,
  //Categories CRUD
  getCategoryData,
  getAddNewCate,
  getUpdateCate,
  postUpdateCate,
  postAddNewCate,
  deleteCate,
  //Categories CRUD

  //Products CRUD
  getProductsData,
  getAddNewProduct,
  getUpdateProduct,
  postUpdateProduct,
  postAddNewProduct,
  deleteProduct,
  //Products CRUD

  //Users CRUD
  getUserData,
  getAddNewUser,
  getUpdateUser,
  postUpdateUser,
  postAddNewUser,
  deleteUser,
  //Users CRUD

  //Orders CRUD
  getOrdersData,
  getOrdersDetail,

  getLogout,
  getLogin,
  postLogin,
  //Thống kê
  getAnalytic,
  parseJWT
}