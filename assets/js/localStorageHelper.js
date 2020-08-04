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
    }
    // data file changed (add index)
    if (JSON.parse(localStorage.user).data[1].idx) {
      return true
    }
    return false
  },
  async fetchData () {
    if (this.checkData() === false) {
      try {
        const res = await axios.get('/2020/data.json')
        localStorage.setItem('user', JSON.stringify(res))
        const filelist = await axios.get('/2020/file.json')
        localStorage.setItem('filelist', JSON.stringify(filelist))
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
