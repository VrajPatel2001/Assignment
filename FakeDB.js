
const FakeDB ={
  data: [
{
    type:'movie',
    name: 'Godzilla',
    id: 1,
    description: 'Members of the crypto-zoological agency Monarch face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super- species-thought to be mere myths-rise again, they all vie for supremacy, leaving humanity\'s very existence hanging in the balance.',
    b_image: '/images/godzilla_B.jpg',
    image: '/images/Godzilla.jpg',
    r_price: 2.99,
    p_price: 11,
    feature: '1'
},
{
    type:'movie',
    name: 'Rampage',
    id: 2,
    description: 'When a genetic experiment goes awry, it unleashes super creatures that rampage the city. Scientist Davis races to secure an antidote to try to save the ape that was once his friend.',
    b_image: '/images/Rampage_B.jpg',
    image: '/images/Rampage.jpg',
    r_price: 1.99,
    p_price: 10,
    feature: '0'
},
{
    type:'movie',
    name: 'Revolt',
    id: 3,
    description: 'Set in the war-ravaged African countryside, an American soldier (Lee Pace) and a French foreign aid worker (Berenice Marlohe) team up to survive the alien onslaught. As they journey through the battlefield in search of refuge, their bond will be tested when the soldier discovers his true identity',    
    b_image: '/images/revolt_B.jpg',
    image: '/images/Revolt.jpg',
    r_price: 1,
    p_price: 8,
    feature: '0'
},
{
    type:'movie',
    name: 'The Contract',
    id: 4,
    description: 'A father (John Cusack) and his son attempt to bring in an assassin (Morgan Freeman) to the authorities, but his dangerous associates have other plans.',
    b_image: '/images/contract_B.jpg',
    image: '/images/The-Contract.jpg',
    r_price: 1.99,
    p_price: 10.99,
    feature: '1'
},
{
    type:'movie',
    name: 'Taken 2',
    id: 5,
    description: 'Albanians in Istanbul, to avenge the death of a leader\'s son, kidnap a retired CIA agent and his Ex-Wife. After their teenage daughter helps them escape, the agent kills the head Albanian.',
    b_image: '/images/Taken-2_B.jpg',
    image: '/images/Taken-2.jpg',
    r_price: 0.99,
    p_price: 7.99,
    feature: '0'
},
{
    type:'movie',
    name: 'Avengers:End Game',
    id: 6,
    description: 'Earth\'s heroes will finally understand how fragile our reality is and the sacrifices that must be made to uphold it in a story of friendship, teamwork and setting aside differences to overcome an impossible obstacle.',
    b_image: '/images/Avengers_B.jpg',
    image: '/images/Avengers-end.jpg',
    r_price: 5.99,
    p_price: 15,
    feature: '1'
},

{
    type:'movie',
    name: 'X-Men',
    id: 7,
    description: 'During a rescue mission in space, one of the X-Men\'s most beloved characters, Jean Grey, is struck by a cosmic force that transforms her into one of the most powerful mutants of all: DARK PHOENIX. Wrestling with this increasingly unstable power and her own personal demons, Jean spirals out of control, tearing the X- Men family apart as they face their most devastating enemy yet -- one of their own.',
    b_image: '/images/X-Men_B.jpg',
    image: '/images/x-men.jpg',
    r_price: 3.99,
    p_price: 8,
    feature: '1'
},
{
    type:'movie',
    name: 'Jumanji: The Next Level',
    id: 8,
    description: 'The four players brave the jungle, desert, mountains and dangerous animals to save the fantastical video game world of Jumanji.',
    b_image: '/images/Jumanji_B.jpg',
    image: '/images/Jumanji.jpg',
    r_price: 2,
    p_price: 7.99,
    feature: '0'
},
{
    type:'movie',
    name: 'Sister of the Groom',
    id: 9,
    description: 'Alicia Silverstone (Clueless) and Tom Everett Scott (That Thing You Do) star in a destination wedding weekend gone off the rails. Audrey (Silverstone) struggles with turning 40 while meeting her new, seemingly perfect sister-in-law. With every intention of breaking up the happy couple, Audrey and her loyal husband (Scott) throw the weekend into a tailspin of embarrassing mishaps that make this destination wedding truly unforgettable.',
    b_image: '/images/sister_B.jpg',
    image: '/images/sister.jpg',
    r_price: 1,
    p_price: 5.99,
    feature: '1'
},
{
    type:'movie',
    name: 'Star Wars: The Last Jedi',
    id: 10,
    description: 'The Star Wars saga continues as the heroes of The Force Awakens join galactic legends in an epic adventure unlocking mysteries of the Force and shocking revelations of the past.',
    b_image: '/images/star_wars_B.jpg',
    image: '/images/Star-Wars.jpg',
    r_price: 4.99,
    p_price: 12.99,
    feature: '1'
},
{
    type:'movie',
    name: '2020: Fallen Earth',
    id: 11,
    description: 'A 16-year-old cult runaway finds himself fighting for his life in a desolate, post-apocalyptic American landscape.',
    b_image: '/images/2020_B.jpg',
    image: '/images/2020.jpg',
    r_price: 2.99,
    p_price: 8.99,
    feature: '0'
},
{
    type:'movie',
    name: 'Onward',
    id: 12,
    description: 'In Disney and Pixar\'s ONWARD, elf brothers, Ian (voice of Tom Holland) and Barley (voice of Chris Pratt), get to spend a day with their late dad and go on a quest aboard Barley\'s epic van Guinevere. When their mom Laurel (voice of Julia Louis-Dreyfus) realizes her sons are gone, she teams up with The Manticore (voice of Octavia Spencer) to find them.',
    b_image: '/images/onward_B.jpg',
    image: '/images/Onward.jpg',
    r_price: 1.99,
    p_price: 6.99,
    feature: '0'
}
,

{
    type:'tv',
    name: 'Office Season 1',
    id: 13,
    description: 'In this first season, Dunder-Mifflin Regional Manager, Michael Scott leads the documentary team and his staff on a journey through inappropriate behavior, well-intentioned but misguided comments and a myriad of poor management techniques. Michael has no clue that his employees barely tolerate him. In his mind, he is their guru, their mentor and their cool friend. His staff includes his dedicated-to-the-point-of-annoying assistant, Dwight Schrute, office receptionist Pam and likable sales rep Jim.',
    b_image: '/images/Office_B.jpg',
    image: '/images/Office.jpg',
    r_price: 3.99,
    p_price: 9.99,
    feature: '0'
},
{
    type:'tv',
    name: 'The Big Bang Theory: Season 1',
    id: 14,
    description: 'Leonard and Sheldon are brilliant physicists. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door.',
    b_image: '/images/big_bang_B.jpg',
    image: '/images/big_bang.jpg',
    r_price: 6.99,
    p_price: 19.99,
    feature: '0'
},
{
    type:'tv',
    name: 'Resident Alien: Season 1',
    id: 15,
    description: 'An alien on a mission to Earth crash lands and finds himself in the remote mountain town of Patience, Colorado.',
    b_image: '/images/resident_B.jpg',
    image: '/images/resident.jpg',
    r_price: 5.99,
    p_price: 15.99,
    feature: '1'
},
{
    type:'tv',
    name: 'A Discovery of Witches: Season 1',
    id: 16,
    description: 'Brilliant historian Diana Bishop is a witch denying her heritage. But when she unexpectedly comes across an ancient, bewitched manuscript, she is thrown into a dangerous mystery--and into the path of enigmatic geneticist and vampire Matthew Clairmont. This romantic thriller is adapted from Deborah Harkness\'s bestselling trilogy of novels.',
    b_image: '/images/Witches_B.jpg',
    image: '/images/Witches.jpg',
    r_price: 6.99,
    p_price: 18.99,
    feature: '0'
},
{
    type:'tv',
    name: 'Chasing Bigfoot: Season 1',
    id: 17,
    description: 'For decades, grainy photographs and campfire stories told the story of a towering creature that lived in solitude in the forests of the Pacific Northwest, Canada, and around the world. But where some see a myth, others see a chance to make history. CHASING BIGFOOT - THE QUEST FOR TRUTH, is a series that looks at the Bigfoot legend through the eyes of the true believers, who devote their lives to discovering the hidden truth and bringing home the evidence to prove it.',
    b_image: '/images/chasing_B.jpg',
    image: '/images/chasing.jpg',
    r_price: 7.99,
    p_price: 19.99,
    feature: '1'
},
{
    type:'tv',
    name: 'Angry Birds: Season 1',
    id: 18,
    description: 'The Angry Birds are determined to defend their nest from the wily plotting of the egg napping Bad Piggies and they won\'t nest till they are safe!',
    b_image: '/images/Angry.jpg',
    image: '/images/Angry.jpg',
    r_price: 3.99,
    p_price: 10.99,
    feature: '0'
},
{
    type:'tv',
    name: 'Hitler\'s Holocaust: Season 1',
    id: 19,
    description: 'Antisemitic human hunt, inhumane living conditions and gas chambers. What was the basis for World War II conflicts? How did the people live and how did the victims survive? Based on information from recently opened archives in Eastern Europe, materials not shown since 1945 - tells the six sections about the escalation of the war and the events of the war years. Stories and experts from both sides - including Simon Wiesenthal - explain the process that led to the "final solution".',
    b_image: '/images/Hitler_B.jpg',
    image: '/images/Hitler.jpg',
    r_price: 10.99,
    p_price: 24.99,
    feature: '1'
},

{
    type:'tv',
    name: 'Death Row: Season 1',
    id: 20,
    description: 'The death penalty in the United States is as old as the country itself, with roots to the original European settlements. During this time over 15,000 men and women have been executed, eventually spurring a heated debate about this ultimate punishment. This documentary takes an inside look at the origins of America\'s capital punishment laws, the methods of execution, and the faces of evil who have received the death sentence including Ted Bundy, Timothy McVeigh, and John Wayne Gacy.',
    b_image: '/images/Death_B.jpg',
    image: '/images/Death.jpg',
    r_price: 2.99,
    p_price: 10.99,
    feature: '0'
},

{
    type:'tv',
    name: 'Shameless: Season 1',
    id: 21,
    description: 'Meet the Gallagher family as they experience life on the edge in a blur of sexual adventures, triumphs, love, scams and petty crime in a Manchester housing estate. Just be thankful they\'re not your neighbors.',
    b_image: '/images/Shameless_B.jpg',
    image: '/images/shameless.jpg',
    r_price: 5.99,
    p_price: 15.99,
    feature: '1'
},
{
    type:'tv',
    name: 'Backroads USA: Season 1',
    id: 22,
    description: 'Many believe that the true roots of America can best be experienced by traveling along the country\'s older trails, paths, and roadways, many of which eventually paved the way for the modern transportation network. Leave the main roads behind for those less traveled and witness how the back roads can leave a lasting impression on you that a trip down the interstate just cannot match.',
    b_image: '/images/Backroads_B.jpg',
    image: '/images/Backroad.jpg',
    r_price: 3.99,
    p_price: 10,
    feature: '0'
},
{
    type:'tv',
    name: 'Doctor Who: Season 1',
    id: 23,
    description: 'Christopher Eccleston\'s Doctor is wise and funny, cheeky and brave. A loner, his detached logic gives him a vital edge when the world\'s in danger. But when it comes to relationships, he can be found wanting. That\'s why he needs Rose. From the moment they meet, the Doctor and Rose are soulmates. With nothing to hold Rose back (neither her overbearing mum nor her hapless boyfriend), she chooses the Doctor and his promise of fantastic adventures across the universe. And he doesn\'t let her down...',    
    b_image: '/images/Doctor_B.jpg',
    image: '/images/Doctor.jpg',
    r_price: 5.99,
    p_price: 14.99,
    feature: '1'
},
{
    type:'tv',
    name: 'Mr. Bean: Season 1',
    id: 24,
    description: 'Life is a difficult challenge for Mr Bean, who despite being a grown adult, has trouble completing even the simplest of tasks. Thankfully, his perseverance is usually rewarded, and he finds an ingenious way around the problem. British sitcom created by Rowan Atkinson and Richard Curtis, and starring Atkinson as the title character.',
    b_image: '/images/Mr.Bean_B.jpg',
    image: '/images/Mr.Bean.jpg',
    r_price: 9.99,
    p_price: 20.99,
    feature: '0'
}

],

getAllmovies()
{
    const movies = new Array;
    let length=0;
    for(var i in this.data)
    {
    length++;
    }
    for(let i=0;i<length;i++)
    {
        if(this.data[i].type=='movie')
        {movies.push(this.data[i]);}
    }
    return movies;
},

getAllTvShows()
{
    const tvShows = new Array;
    let length=0;
    for(var i in this.data)
    {
    length++;
    }
    for(let i=0;i<length;i++)
    {
        if(this.data[i].type=='tv')
        {tvShows.push(this.data[i]);}
    }
    return tvShows;
},

getFeaturedMovies()
{
    const Featuredmovies = new Array;
    let length=0;
    for(var i in this.data)
    {
length++;
    }
    for(let i=0;i<length;i++)
    {

        if(this.data[i].feature == '1' && this.data[i].type=='movie')
        {Featuredmovies.push(this.data[i]);}
    }
    return Featuredmovies;
    
},

getFeaturedTv()
{
    const FeaturedTv = new Array;
    let length=0;
    for(var i in this.data)
    {
length++;
    }
    for(let i=0;i<length;i++)
    {
        if(this.data[i].feature == '1' && this.data[i].type=='tv')
        {FeaturedTv.push(this.data[i]);}
    }
    return FeaturedTv;
},

getAMovieOrTv(id)
{
    // const featured = this.data.find((featured)=>{
    //     return featured.id == id;
    // })

    let movieOrTv=null;
    let length=0;
    for(var i in this.data)
    {
length++;
    }
    for(let i=0;i<length;i++)
    {
        if(this.data[i].id == id)
        {movieOrTv = this.data[i];}
    }
    return movieOrTv;
    
}



}
module.exports = FakeDB;
