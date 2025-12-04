const temples = [
  {
    templeName: "Santa Elen de Uairen",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gpms-cs-s/APRy3c9ZmVs-nZIIwEdGxR0bywP7Qrb31owJPTQ4FWu0-Z4saI9KKgTRpMSUyMvkpSWjhKbgna9Ul43prfGRhmSjR362UDsTduuRFr3Y99EaRtbqoQWcZm4AP9vCTJ-iauTp08N1hlI=w665-h300-n-k-no"
  },
  {
    templeName: "Rapidos de Kamoiran",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gpms-cs-s/APRy3c8UJkviKGkziSkQpYKKEJpME11UFi38CnXU-x0vyql0IWMp7Lk_1_iBrrtOEbMrnLLJmeiHmMeDE9IbAgdabl3THe8W7wH9XHRdQklgj30GsvKZwy07DVjLHSWDxltrsGHaYY1W=s680-w680-h510-rw"
  },
  {
    templeName: "Salto Angel",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyABR_0r23m_1jED7sBsfyqXJMPMdUzXL06hgiZXqjrguZJ5Xc-VTh5QfTIJxyV4341rAPnudua0FXFHqL4Vbca5GxrWHFBjNOh_IBfMy7-55M9qZudLu5OIV9YvRtRxYO09Y4kUg=s680-w680-h510-rw"
  },
  {
    templeName: "Piedra de la Virgen",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyVFzzBWjrd66DJnuK8mPmVw52gd6T7bX1OOhJ4PCs-J3tru63XNmoHreoWQojX8Eny6bxEkt1nIrWkdxGyiIV8O2Mnao9s76YsqA7Ql9JfnVRqbkzjWcPSrOWJWZBQ0YxKYosF=s680-w680-h510-rw"
  },
  {
    templeName: "Salto Kama",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwBmEu9BlEbjryPe_vOmrJPULeU04XT7dt2OUOWv2QtQfQ48HLyph0YAJZI9hVpo9k8Fbvb-POJ5LQ0bp30eqbPJoWc-O2n8PjQNINjFj-Akpz_o14YLdAyfg_D0rMGfx4B4kZj=s680-w680-h510-rw"
  },
  {
    templeName: "Salto Aponwao",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy5Gb-Tpq86o2qqcJRPCwiD-Ubw4sxP1f9AerorP7wRr2l8FEBfB5hK4GNUOInibgN5qeDV5gLXpfGKDqUA-Oz9WLX1RZqtvZfw_W4kLuKhBGuATP9c7z0N_YpGhy-m4RI76Lur=s680-w680-h510-rw"
  },
  {
    templeName: "Quebrada Jaspe",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzapxMiQpkh5Zka4wKLq4BLvgtncRkz6gRScDKQT9FR-jKqDC6kR39rmwf34rb2SbyI-Yu5HH2SirCEnIwInLfvcGboiDDeA4Ghj_1LdZgTuJ9Gjaw24uMrNRpWYup23D84OPL9OA=s680-w680-h510-rw"
  },
  {
    templeName: "Auyan-Tepui",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy0pVnrzeZIlOuP5wUthL_pDaRbHb7axa2X-C5B0dP8k64QjGQgVa2C8BfegcjdU7qmiFUwAYaizWHYbAz623Nt19dvw4wj3vzj09c-ATdh0YgM99R0tthuhNDCoD_zmE0O-Go=s294-w294-h220-k-no"
  },
  {
    templeName: "Roraima",
    location: "Bolivar, Venezuela",
    imageUrl:
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyNOvqS4GTVPEKgaqA8yOCKzprhJM2-MXfsCCcACabV5sE06UwexI8kLAtRtos1KkzdW3B346bBS_XfhH6KTl4orOKO-lxMIMiXLcfchgHT75Y9Kqndhb8VCohVnEVxMMndkmeYpQ=s294-w294-h220-k-no"
  },
];


function displayTemples(templesArray) {
    const container = document.getElementById('temples-container');
    container.innerHTML = ''; 
    templesArray.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}


function filterOld() {
    const filtered = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
    displayTemples(filtered);
}

function filterNew() {
    const filtered = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
    displayTemples(filtered);
}

function filterLarge() {
    const filtered = temples.filter(temple => temple.area > 90000);
    displayTemples(filtered);
}

function filterSmall() {
    const filtered = temples.filter(temple => temple.area < 10000);
    displayTemples(filtered);
}


document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);
   
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});

