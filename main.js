let randomBinary = () => {
  return Math.round(Math.random())
}
randomBinary()

const row = document.querySelector('.row')

// creates first row with random class true or false
for (let i = 0; i <= 100; i++) {
  let div = document.createElement('div')
  document.querySelector('.row').appendChild(div)
  div.classList.add(randomBinary() ? 'true' : 'false')
}

const duplicateRow = () => {
  let allRows = document.querySelectorAll('.row')
  let lastRow = allRows[allRows.length - 1]
  let cloneLastRow = lastRow.cloneNode(true)
  document.querySelector('.wrapper').appendChild(cloneLastRow)

  automatizeRow(lastRow, cloneLastRow)

  let wrapperHt = document.querySelector('.wrapper').offsetHeight
  console.log('wrapperHt: ', wrapperHt)
  if (wrapperHt >= 500) {
    clearInterval(duplicateInterval)
  }
}
let duplicateInterval = setInterval(duplicateRow, 50)

function automatizeRow(prevRow, newRow) {
  for (let i = 0; i < prevRow.childNodes.length; i++) {
    let newDiv = newRow.childNodes[i]
    // console.log('—— newDiv_' + `${i}`, newDiv)
    let prevMid = prevRow.childNodes[i]
    let prevLeft = prevRow.childNodes[i - 1] || prevRow.childNodes[prevRow.childNodes.length - 1]
    let prevRight = prevRow.childNodes[i + 1] || prevRow.childNodes[0]
    // console.log('prevLeft', prevLeft)
    // console.log('prevMid', prevMid)
    // console.log('prevRight', prevRight)

    if (prevLeft.classList.contains('true')
      && prevMid.classList.contains('true')
      && prevRight.classList.contains('true')
    ) {
      newDiv.classList.add('false')
      newDiv.classList.remove('true')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('true')
      && prevMid.classList.contains('true')
      && prevRight.classList.contains('false')
    ) {
      newDiv.classList.add('true')
      newDiv.classList.remove('false')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('true')
      && prevMid.classList.contains('false')
      && prevRight.classList.contains('true')
    ) {
      newDiv.classList.add('true')
      newDiv.classList.remove('false')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('true')
      && prevMid.classList.contains('false')
      && prevRight.classList.contains('false')
    ) {
      newDiv.classList.add('false')
      newDiv.classList.remove('true')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('false')
      && prevMid.classList.contains('true')
      && prevRight.classList.contains('true')
    ) {
      newDiv.classList.add('true')
      newDiv.classList.remove('false')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('false')
      && prevMid.classList.contains('true')
      && prevRight.classList.contains('false')
    ) {
      newDiv.classList.add('false')
      newDiv.classList.remove('true')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('false')
      && prevMid.classList.contains('false')
      && prevRight.classList.contains('true')
    ) {
      newDiv.classList.add('false')
      newDiv.classList.remove('true')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('false')
      && prevMid.classList.contains('false')
      && prevRight.classList.contains('false')
    ) {
      newDiv.classList.add('true')
      newDiv.classList.remove('false')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
  }
}