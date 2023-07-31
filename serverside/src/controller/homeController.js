import pool from '../configs/connectDB';

let getHomepage = async (req,res)=>{
    // Viet Logic o day
  const [rows, fields] = await pool.execute('SELECT * FROM users');
  console.log("Checking selected:",rows);
  return res.render('index.ejs', {dataUser: rows,test: 'XIn chao Node JS' })

}

let getDetailPage = async(rep,res)=>{
  let userId = rep.params.id;
  let [user] = await pool.execute(`select * from users where id =?`,[userId]);
 
  return res.send(JSON.stringify(user))

}

let createNewUser =async(req,res)=>{
  console.log('check request: ', req.body)

  let {firstName,lastName,address,email} = req.body;
  await pool.execute('insert into users(firstName, lastName,address, email) values(?,?,?,?)',
  [firstName,lastName,address,email]);
  return res.redirect('/');
}

let deleteUser = async(req,res)=>{
  let userId = req.body.userId;

await pool.execute('delete from users where id=?',[userId]);
return res.redirect('/');
}

let getEditPage = async (req,res)=>{
  let id = req.params.id;
  let [user] = await pool.execute('select * from users where id=?',[id]);
  console.log('log user,',user)
return res.render('update.ejs',{dataUser:user[0]})
}

let postUpdateUser = async(req,res)=>{
  let {firstName,lastName,address,email,id} = req.body;
 
  await pool.execute('update users set firstName=?, lastName=?, email=?, address=? where id=?',
  [firstName,lastName,email,address,id])

  return res.redirect('/');
}

module.exports ={
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage,postUpdateUser
}