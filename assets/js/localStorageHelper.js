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
    /*
        const jsonVersion = await axios.get('/2020/version.json')
    if (localStorage.getItem('user') === null || localStorage.getItem('filelist') === null) {
      return false
    }
    if (!localStorage.getItem('version')) {
      localStorage.setItem('version', String(jsonVersion.data.version))
      console.log(String(jsonVersion.data.version))
      return false
    }
    if (localStorage.getItem('version') === jsonVersion.data.version) {
      return true
    }
    return false
    */
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
