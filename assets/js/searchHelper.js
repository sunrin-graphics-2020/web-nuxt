const helper = {
  Video: Array(14).fill(0).map((x, y) => x + y),
  Modeling: [14, 15, 58],
  GameDesign: [16],
  Branding: [17],
  Illustration: Array(21).fill(18).map((x, y) => x + y),
  Character: Array(5).fill(39).map((x, y) => x + y),
  Product: Array(4).fill(44).map((x, y) => x + y),
  UIUXDesign: Array(10).fill(48).map((x, y) => x + y),

  searchArr (select) {
    switch (select) {
      case '영상':
        return this.Video
      case '3D 디자인':
        return this.Modeling
      case '게임 디자인':
        return this.GameDesign
      case '시각 디자인':
        return this.Branding
      case '일러스트레이션':
        return this.Illustration
      case '캐릭터 디자인':
        return this.Character
      case '프로덕트 디자인':
        return this.Product
      case 'UI/UX 디자인':
        return this.UIUXDesign
    }
  },

  searchJson (select) {
    const jsondata = {}
    let arr = {}

    switch (select) {
      case '영상':
        arr = this.Video
        break
      case '3D 디자인':
        arr = this.Modeling
        break
      case '게임 디자인':
        arr = this.GameDesign
        break
      case '시각 디자인':
        arr = this.Branding
        break
      case '일러스트레이션':
        arr = this.Illustration
        break
      case '캐릭터 디자인':
        arr = this.Character
        break
      case '프로덕트 디자인':
        arr = this.Product
        break
      case 'UI/UX 디자인':
        arr = this.UIUXDesign
        break
    }
    arr.forEach((element, idx) => {
      jsondata[idx] = JSON.parse(localStorage.user).data[element]
    })
    return jsondata
  }

}

export default helper
