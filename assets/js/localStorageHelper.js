import axios from 'axios'

const helper = {
  userData (id) {
    return JSON.parse(localStorage.user).data[id]
  },
  user (id) {
    return JSON.parse(localStorage.user).data
  },
  fileData (id) {
    return JSON.parse(localStorage.filelist).data[id]
  },
  removeData () {
    localStorage.removeItem('user')
    localStorage.removeItem('filelist')
  },
  async checkVersion () {
    const jsonVersion = await axios.get('/2020/version.json')
    if (localStorage.getItem('version')) {
      if (localStorage.getItem('version') === String(jsonVersion.data.version)) {
        return true
      } else {
        localStorage.setItem('version', String(jsonVersion.data.version))
        return false
      }
    } else {
      localStorage.setItem('version', String(jsonVersion.data.version))
      return false
    }
  },
  checkData () {
    if (localStorage.getItem('user') === null || localStorage.getItem('filelist') === null) {
      return false
    }
    return true
  },
  async fetchData () {
    if (this.checkData() === false || this.checkVersion === false) {
      try {
        console.log('fetch data')
        const res = await axios.get('/2020/data.json')
        localStorage.setItem('user', JSON.stringify(res))
        const filelist = await axios.get('/2020/file.json')
        localStorage.setItem('filelist', JSON.stringify(filelist))
        return 205
      } catch {
        return 501
      }
    } else {
      console.log('데이터 존재')
      return 200
    }
  }
}

export default helper
