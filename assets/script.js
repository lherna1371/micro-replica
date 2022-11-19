const cards = [
    {header: 'Up to $400 off select Surface Laptop Studio', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-FY23HOL?wid=515&hei=293&fit=crop', desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', links: ['https://loremipsum.io/generator/?n=1&t=s']},
    {header: 'Up to $203 off Surface Laptop Go 2 Bundle', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bundles-Surface-Laptop-Go-2-Mobile-Mouse-Complete-FY23HOL?wid=515&hei=293&fit=crop', desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', links: ['https://loremipsum.io/generator/?n=1&t=s']},
    {header: 'Up to $203 off Surface Laptop Go 2 Bundle', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-Studio-FY23HOL?wid=515&hei=293&fit=crop', desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', links: ['https://loremipsum.io/generator/?n=1&t=s', 'https://loremipsum.io/generator/?n=1&t=s']},
    {header: 'Xbox Series X', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bundles-Surface-Laptop-4-Pen-Complete-FY23HOL?wid=515&hei=293&fit=crop', desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', links: ['https://loremipsum.io/generator/?n=1&t=s']}
]

for (let i = 0; i < cards.length; i++){
    console.log(cards[i].image);
    let cardDiv = document.createElement('div');
    // header create and append 
    let header = document.createElement('h2');
    header.textContent = cards[i].header;
    cardDiv.append(header);

    // image create and append 
    let image = document.createElement('img');
    image.src = cards[i].image;
    cardDiv.append(image);

    let desciption = document.createElement('p');
    desciption.textContent = cards[i].desciption;
    cardDiv.append(desciption);

    // for(let x = 0; cards[i].links.length; x++ ) {
    //     let linktag = document.createElement('a');
    //     linktag.href = cards[i].links[i];
    //     cardDiv.append(linktag);
    // }
    
    document.querySelector('.products').append(cardDiv);
}