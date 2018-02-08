var UserSQL = {
  insert: 'INSERT INTO user(name,password) VALUES(?,?)',
  queryAll: 'SELECT * FROM user',
  getUserById: 'SELECT * FROM user WHERE name = ? ',
  latestTask:'SELECT id,number,title,mode,visit_num,status,add_time,end_time FROM	demand WHERE end_time IS NULL ORDER BY add_time DESC LIMIT 4'
};
module.exports = UserSQL;