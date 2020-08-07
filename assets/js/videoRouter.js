const router = {
  videoUrl (_pageid) {
    const pageid = Number(_pageid)
    // if pageid == 10 : return 1
    const arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]
    const table = new Map()
    arr.forEach((element, index) => {
      table.set(element, index + 1)
    })
    return table.get(pageid)
  }
}

export default router
