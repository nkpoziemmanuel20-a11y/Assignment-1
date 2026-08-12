const bankUsers = [
  {
    accountName: "Ecfunachukwu Spenzy",
    totalBalance: 850000,
    expenditure: [
      {
        date: "2026-08-01",
        description: "Electricity Bill",
        amount: 25000
      },
      {
        date: "2026-08-02",
        description: "Supermarket Shopping",
        amount: 18000
      },
      {
        date: "2026-08-03",
        description: "Netflix Subscription",
        amount: 5500
      }
    ]
  },

  {
    accountName: "Sarah Johnson",
    totalBalance: 1250000,
    expenditure: [
      {
        date: "2026-07-30",
        description: "Fuel",
        amount: 30000
      },
      {
        date: "2026-08-01",
        description: "Restaurant",
        amount: 12000
      },
      {
        date: "2026-08-03",
        description: "Online Shopping",
        amount: 45000
      }
    ]
  },

  {
    accountName: "Michael Brown",
    totalBalance: 475000,
    expenditure: [
      {
        date: "2026-08-01",
        description: "Internet Subscription",
        amount: 12000
      },
      {
        date: "2026-08-02",
        description: "Transportation",
        amount: 8000
      },
      {
        date: "2026-08-03",
        description: "Gym Membership",
        amount: 15000
      }
    ]
  }
];

// First user's name
console.log(bankUsers[0].accountName);

// Second user's balance
console.log(bankUsers[1].totalBalance);

// Third user's second expenditure
console.log(bankUsers[2].expenditure[1]);

// Amount spent on the first expenditure of the first user
console.log(bankUsers[0].expenditure[0].amount);
//const containerbnt = document.getElementById(container)
//console.log(containerbnt)

//const subcontainerbnt = document.getElementById(subContainer)

//const dashbnt = document.getElementById(dash)

//const middleContainerbnt = document.getElementById(middleContainer)

const nameBnt = document.getElementById('welcomeName')
//console.log(nameBnt)
nameBnt.textContent=`Welcome, ${bankUsers[0].accountName.split(' ')[0]}`;

//const mainboxbnt = document.getElementById('mainbox')

//const oneboxbnt = document.getElementById('onebox')

const oNebnt = document.getElementById('oNe')
oNebnt.textContent = `$${bankUsers[0].totalBalance.toLocaleString()}`;
//console.log(oNebnt)
//const tThreebnt = document.getElementById('tThree')

const tWobnt = document.getElementById('tWo')
tWobnt.textContent = `$${bankUsers[1].expenditure[1].amount}`;

// const boxtowbnt = document.getElementById('boxtwo')

// const twoboxbnt = document.getElementById('twoBox')

// const boxthreebnt = document.getElementById('boxthree')

// const threeboxbnt = document.getElementById('threeBox')

// const sendmoneybnt = document.getElementsByClassName('sendMoney')

// const moneysendbnt = document.getElementById('moneySend')

// const bntonebnt = document.getElementById('bntOne')

// const bnttwobnt = document.getElementById('bntTwo')

// const bntthreebnt = document.getElementById('bntThree')

// const containeramountbnt = document.getElementById('containAmount')

// const toppartbnt = document.getElementById('topPart')

//const subtopbnt = document.getElementById('subTop')

const linebnt = document.getElementById("line")
//linebnt.textContent = bankUsers[1].expenditure[1].description

const linednt = document.getElementById("lineD")
linednt.textContent = bankUsers[1].expenditure[0].description
console.log(linednt)

const linetwobnt = document.getElementById("lineTwo")

const lineObnt = document.getElementById("lineO")

const lineThreebnt = document.getElementById("lineThree")

const lineFourbnt = document.getElementById("lineFour")

const lineAbnt = document.getElementById("lineA")

const octAbnt = document.getElementById("octA")
octAbnt.textContent = bankUsers[1].expenditure[0].date
//console.log(octAbnt)

const octBbnt = document.getElementById("octB")
octBbnt.textContent = bankUsers[0].expenditure[2].date

const octCbnt = document.getElementById("octC")
octCbnt.textContent = bankUsers[2].expenditure[1].date

const octDbnt = document.getElementById("octD")
octDbnt.textContent = bankUsers[0].expenditure[1].date

const octEbnt = document.getElementById("octE")
octEbnt.textContent = bankUsers[2].expenditure[2].date

