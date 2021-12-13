let Health_player = 20;
let player_crystals = 3;
let Health_bot = 20;
let bot_crystals = 3;

let who = 0;

function decide() {
    if(randomm(2)) {
        who = 1;
    }
}

decide();

let arr = [
    {
        img: "../img/spider.png", name: "Spider-man", desc: "Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers. After the death of his Uncle Ben, Peter learned that with great power, comes great responsibility. Swearing to always protect the innocent from harm, Peter Parker became Spider-Man. ",
        attack: 20, defence: 10, cost: 1
    },
    {
        img: "../img/Халк.png", name: "Hulk", desc: "After being bombarded with a massive dose of gamma radiation while saving a young man's life during an experimental bomb testing, Dr. Robert Bruce Banner was transformed into the Incredible Hulk: a green behemoth who is the living personification of rage and pure physical strength.",
        attack: 30, defence: 10, cost: 1
    },
    {
        img: "../img/Магнитик.png", name: "Silver Surfer", desc: "Norrin Radd of Zenn-La is the mighty herald of Galactus, the devourer of worlds. Gifted with the Power Cosmic and a trusty board that's faster than lightspeed, which he can summon at will whenever needed, Norrin Radd travels to distant reaches throughout the universe as the Silver Surfer.",
        attack: 40, defence: 10, cost: 1
    },
    {
        img: "../img/Кэп.png", name: "Captain America", desc: "During World War II, Steve Rogers volunteered to receive the experimental Super-Soldier Serum. Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield, he became Captain America. After a failed mission left him encased in ice for decades, he was found and revived by the Avengers, later joining their ranks and eventually becoming the team's leader.",
        attack: 50, defence: 10, cost: 10
    },
    {
        img: "../img/Professor_X.png", name: "Professor X", desc: "Professor Charles Xavier is the creator of the X-Men and founder of the Xavier School for Gifted Youngsters. His dream of peaceful coexistence between mutants and humanity has long been the driving force for the X-Men. An immensely powerful telepath and scientific genius, Xavier was among the world's greatest masterminds. Killed at the hands of a Phoenix crazed Cyclops, Xavier's memory and dream still remains and motivates his X-Men to keep fighting for a world that fears and hates them.",
        attack: 6, defence: 10, cost: 1
    },
    {
        img: "../img/Doctor_Strange.png", name: "Doctor Strange", desc: "Dr. Stephen Strange was once a gifted but egotistical surgeon who sought out the Ancient One to heal his hands after they were wounded in a car accident. Instead, the Ancient One trained him to become Master of the Mystic Arts and the Sorcerer Supreme of Earth.",
        attack: 40, defence: 60, cost: 1
    },
    {
        img: "../img/Black_Panther.png", name: "Black Panther", desc: "T'Challa is the Black Panther, king of Wakanda, one of the most technologically advanced nations on Earth. He is among the top intellects and martial artists of the world, a veteran Avenger, and a member of the Illuminati. Using his powers and abilities, he has pledged his fortune, powers, and life to the service of all mankind.",
        attack: 30, defence: 55, cost: 1
    },
    {
        img: "../img/Phil_Coulson.png", name: "Phil Coulson", desc: "An agent of S.H.I.E.L.D. and member of the Secret Avengers. He is a character that was introduced in the Marvel Cinematic Universe and has achieved status as a fan favorite.",
        attack: 10, defence: 10, cost: 1
    },
    {
        img: "../img/Галактус.png", name: "Galactus", desc: "Galactus is a fictional character appearing in American comic books published by Marvel Comics. Formerly a mortal man, Galactus is a cosmic entity who originally consumed planets to sustain his life force, and serves a functional role in the upkeep of the primary Marvel continuity. Galactus was created by Stan Lee and Jack Kirby and first appeared in the comic book Fantastic Four.",
        attack: 34, defence: 44, cost: 1
    },
    {
        img: "../img/Гоблин.png", name: "Norman Osborn", desc: "The Green Goblin is the alias of several fictional supervillains appearing in American comic books published by Marvel Comics. The first and best known incarnation, Norman Osborn, created by Stan Lee and Steve Ditko, is generally considered to be the archenemy of Spider-Man.",
        attack: 56, defence: 76, cost: 1
    },
    {
        img: "../img/Дедпул.png", name: "DEADPOOL", desc: "Ever-quipping mercenary Wade Wilson’s healing factor—and big mouth—make him one of the most relentlessly wisecracking heroes in the universe.",
        attack: 20, defence: 16, cost: 1
    },
    {
        img: "../img/Железо.png", name: "Iron Man", desc: "Tony Stark was the arrogant son of wealthy, weapon manufacturer Howard Stark. Tony cared only about himself, but he would have a change of heart after he was kidnapped by terrorists and gravely injured. Pressured to create a weapon of mass destruction, Stark instead created a suit of armor powerful enough for him to escape. Tony uses his vast resources and intellect to make the world a better place as The Invincible Iron Man. Stark's super hero identity led him to become a founding member of the Avengers.",
        attack: 32, defence: 83, cost: 1
    },
    {
        img: "../img/Black_Cat.png", name: "Black Cat", desc: "Former cat burglar Felicia Hardy became a crime fighter when she became romantically attracted to and involved with Spider-Man. Felicia has the ability to instill bad luck around others - this comes in handy when fighting crime!",
        attack: 30, defence: 23, cost: 1
    },
    {
        img: "../img/WANDA_MAXIMOFF.png", name: "WANDA MAXIMOFF", desc: "Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.",
        attack: 65, defence: 43, cost: 1
    },
    {
        img: "../img/BLACK_WIDOW.png", name: "BLACK WIDOW", desc: "Despite super spy Natasha Romanoff’s checkered past, she became one of S.H.I.E.L.D.’s most formidable agents before joining the Avengers.",
        attack: 30, defence: 40, cost: 1
    },
    {
        img: "../img/Wolverine.png", name: "Wolverine", desc: "A long-lived mutant with the rage of a beast and the soul of a Samurai, James Logan Howlett's once mysterious past is filled with blood, war and betrayal. Possessing an accelerated healing factor, keenly enhanced senses and bone claws in each hand (along with his skeleton) that are coated in adamantium. Wolverine is, without question, the ultimate weapon.",
        attack: 45, defence: 60, cost: 1
    },
    {
        img: "../img/Thanos.png", name: "Thanos", desc: "Thanos is a fictional supervillain appearing in American comic books published by Marvel Comics. He was created by writer-artist Jim Starlin, and made his first appearance in The Invincible Iron Man",
        attack: 33, defence: 32, cost: 1
    },
    {
        img: "../img/Punisher.png", name: "Punisher", desc: "The Punisher (Francis Frank Castle, born Castiglione) is a fictional antihero appearing in American comic books published by Marvel Comics. The character was created by writer Gerry Conway and artists John Romita Sr. and Ross Andru. The Punisher made his first appearance in The Amazing Spider-Man",
        attack: 33, defence: 40, cost: 1
    },
    {
        img: "../img/ANT-MAN.png", name: "ANT-MAN", desc: "Overcoming his criminal past, Scott Lang follows in the tiny, yet mighty, footsteps of his predecessor as the size-changing hero known as Ant-Man!",
        attack: 43, defence: 65, cost: 1
    },
    {
        img: "../img/Daredevil.png", name: "Daredevil", desc: "Daredevil is a fictional superhero appearing in American comic books published by Marvel Comics. Daredevil was created by writer-editor Stan Lee and artist Bill Everett, with an unspecified amount of input from Jack Kirby.",
        attack: 45, defence: 65, cost: 1
    },
];

function randomm(max) {
    return Math.floor(Math.random() * max);
}
let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// console.log(cards);
let card1_num = randomm(20);
let numbers=[];
for (let index = 0; index < 20; index++) {
    let i = randomm(20 - index);
    numbers[index] = cards[i];
    cards.splice(i,1);
    // console.log(cards);
}
let count = 0;
document.querySelectorAll('#main .cards img').forEach(image => {
    image.setAttribute('src', arr[numbers[count]].img);
    // console.log(numbers[count]);
    count++;
});

count = 0;
document.querySelectorAll(".Name").forEach(name => {
    name.innerText = arr[numbers[count]].name;
    count++;
});

count = 0;
document.querySelectorAll(".Attack_Defence").forEach(name => {
    name.innerText = 'Attack: ' + arr[numbers[count]].attack + ' Defence: ' + arr[count].defence;
    count++;
});

count = 0;
document.querySelectorAll(".Cost").forEach(name => {
    name.innerText = "Cost: " + arr[numbers[count]].cost;
    count++;
});

function turn(src) {
    document.querySelectorAll('.invisible').forEach(card => {
        if (card.style.display == "none") {
            card.style.display = "block";
            document.querySelectorAll('img').forEach(image => {
                image.setAttribute('src', src);
            });
            console.log("hfbgkfjogjnf");
            return;
        }
    });
}

let used_cards = [];

let cardarr = document.getElementsByClassName('cards')[2].getElementsByClassName("my_card");
// console.log(cardarr);

let test = document.getElementsByClassName('mycards')[0];
for (let index = 0; index < cardarr.length; index++) {
    let card = document.getElementsByClassName('cards')[2].getElementsByClassName("my_card")[index];
    card.onclick = function () {
        let used_card = 0;
        numbers.forEach(number =>{

            // console.log("Card name: " + card.getElementsByClassName("Name")[0].innerText);
            // console.log("Number: " + number);
            // console.log("Number in arr: " + arr[number].name);

            if (arr[number].name == card.getElementsByClassName("Name")[0].innerText) {
                used_card = number;
            }
        })
        // console.log("Used card: " + used_card);
        if (arr[used_card].cost <= player_crystals) {
            used_cards.push(used_card);
            test.appendChild(card);
            player_crystals -= arr[used_card].cost;

            // console.log(player_crystals);

            let crys_vis = document.querySelector("#crystalls");
            crys_vis.innerText= "Crystalls: " + player_crystals;
        } else {
            alert("You dont have enough crystals!");
        }
    }
}

function bot_and_calc_result() {
    let bot_attack = 0;
    let bot_defence = 0;
    let cardarr = document.getElementsByClassName('cards')[0].getElementsByClassName("my_card");
    let test = document.getElementsByClassName('cards')[1];
    // console.log(cardarr);
    for (let i = 0; i < cardarr.length; i++) {
        // console.log(cardarr[i].getElementsByClassName("Cost")[0].innerText);
        let raw = cardarr[i].getElementsByClassName("Cost")[0].innerText;
        // console.log(raw);
        let split = raw.split(" ");
        // console.log(split[1]);
        if (parseInt(split[1]) <= bot_crystals) {
            test.appendChild(cardarr[i]);
            bot_crystals -= split[1];

            let info = cardarr[i].getElementsByClassName("Attack_Defence")[0].innerText;
            let splitted = info.split(" ");
            bot_attack = parseInt(splitted[1]);
            bot_defence = parseInt(splitted[3]);
            break;
        }
    }

    let defence = 0;
    let attack = 0;
    // console.log(used_cards);
    used_cards.forEach(card =>{
        defence += arr[card].defence;
    });
    used_cards.forEach(card =>{
        attack += arr[card].attack;
    });

    // console.log(bot_attack);
    // console.log(defence);

    if (attack > bot_defence) {
        return 0 - bot_attack;
    } else {
        return attack;
    }
}

function know_results() {
    let damage = bot_and_calc_result();
    console.log(damage);
    if (damage > 0) {
        Health_bot -= damage;
        let health = document.querySelector("#bot");
        console.log(health);
        console.log(health.innerText);
        health.innerText = "Health: " + Health_bot;
        console.log(health);
    } else {
        Health_player += damage;
        let health = document.querySelector("#player");
        console.log(health);
        console.log(health.innerText);
        health.innerText = "Health: " + Health_player;
        console.log(health);
    }
    if (Health_player <= 0) {
        alert("game over : you lost!")
    }
    if (Health_bot <= 0) {
        alert("game over : you won!")
    }
    bot_crystals++;
    player_crystals++;
    // setTimeout(null, 2);

}