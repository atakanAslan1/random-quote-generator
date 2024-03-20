const apiURL = 'https://api.quotable.io'
const quote = document.querySelector('.quote-box')
const p = document.createElement('p')
const btn = document.getElementById('btn')
const author = document.createElement('span')



const getquote = async () => {
  const response = await fetch(`${apiURL}/random`)
  const data = await response.json()
  return data
}

btn.addEventListener('click', () => {
    getquote().then(data => {
        
        p.textContent = data.content
        author.textContent = data.author
        

        
    })
    quote.appendChild(p)
    quote.appendChild(author)
})

