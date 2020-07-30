import axios from 'axios'

const helper = {
  userData () {
    return JSON.parse(localStorage.user).data
  },
  removeData () {
    localStorage.removeItem('user')
  },
  checkData () {
    if (localStorage.getItem('user') === null) {
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
