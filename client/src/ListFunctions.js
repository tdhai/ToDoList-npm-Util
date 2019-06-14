import axios from'axios'

export const getList = () =>{
  return axios
  .get('api/tasks',{
      headers:{'Content-Type': 'application/json'}
  })
  .then(res=>{
      var data = []
      Object.keys(res.data).forEach((key) =>{
          var val =res.data[key]
          data.push([val.task_name], val._id)
      })
      return data
  })
}

export const addList = term =>{
  return axios
  .post('api/task',{
    task_name: term
  }, {
    headers:{'Content-Type': 'application/json'}
  })
  .then((response) =>{
    console.log(response)
  })
}

export const deleteList = (term) =>{
  return axios
  .delete(`api/task/${term}`,{
    headers:{'Content-Type': 'application/json'}
  })
  .then((response) =>{
    console.log(response)
  })
  .catch((error) =>{
    console.log(error)
  })
}

export const updateList = (term, id) =>{
  return axios
  .put(`api/task/${id}`,{
    task_name: term
  }, {
    headers:{'Content-Type': 'application/json'}
  })
  .then((response) =>{
    console.log(response)
  })
}

