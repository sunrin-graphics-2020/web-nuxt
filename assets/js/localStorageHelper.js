import axios from 'axios'

const helper = {
  userData () {
    return JSON.parse(localStorage.user).data
  },
  fileData (id) {
    return JSON.parse(localStorage.filelist).data[id]
  },
  removeData () {
    localStorage.removeItem('user')
    localStorage.removeItem('filelist')
  },
  checkData () {
    if (localStorage.getItem('user') === null || localStorage.getItem('filelist') === null) {
      return false
    } else {
      return true
    }
  },
  async fetchData () {
    if (this.checkData() === false) {
      console.log('데이터 없음')
      try {
        const res = await axios.get('/2020/data.json')
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res))

        const filelist = await axios.get('/2020/file.json')
        console.log(filelist)
        localStorage.setItem('filelist', JSON.stringify(filelist))

        console.log(this.checkData())
        return 205
      } catch {
        return 501
      }
    } else {
      return 200
    }
  }
}

export default helper
