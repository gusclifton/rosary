export interface Prayer {
  id: string;
  title: string;
  text: string;
  type: 'opening' | 'mystery' | 'decade' | 'closing';
}

export interface Mystery {
  id: string;
  name: string;
  dayOfWeek: string;
  title: string;
  days: string[];
}

export const openingPrayers: Prayer[] = [
  {
    id: 'sign-of-cross',
    title: 'Sign of the Cross',
    text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
    type: 'opening',
  },
  {
    id: 'apostles-creed',
    title: "Apostles' Creed",
    text: "I believe in God, the Father almighty, creator of heaven and earth; and in Jesus Christ, his only Son, our Lord; who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell; the third day he rose again from the dead; he ascended into heaven, sitteth at the right hand of God the Father almighty; from thence he shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.",
    type: 'opening',
  },
  {
    id: 'our-father-1',
    title: 'Our Father',
    text: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
    type: 'opening',
  },
  {
    id: 'hail-mary-1',
    title: 'Hail Mary (1st)',
    text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    type: 'opening',
  },
  {
    id: 'hail-mary-2',
    title: 'Hail Mary (2nd)',
    text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    type: 'opening',
  },
  {
    id: 'hail-mary-3',
    title: 'Hail Mary (3rd)',
    text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    type: 'opening',
  },
  {
    id: 'glory-be-1',
    title: 'Glory Be',
    text: 'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
    type: 'opening',
  },
];

export const mysteries: Mystery[] = [
  {
    id: 'joyful',
    name: 'Joyful',
    dayOfWeek: 'Monday and Saturday',
    title: 'The Joyful Mysteries',
    days: ['monday', 'saturday'],
  },
  {
    id: 'sorrowful',
    name: 'Sorrowful',
    dayOfWeek: 'Tuesday and Friday',
    title: 'The Sorrowful Mysteries',
    days: ['tuesday', 'friday'],
  },
  {
    id: 'glorious',
    name: 'Glorious',
    dayOfWeek: 'Wednesday and Sunday',
    title: 'The Glorious Mysteries',
    days: ['wednesday', 'sunday'],
  },
  {
    id: 'luminous',
    name: 'Luminous',
    dayOfWeek: 'Thursday',
    title: 'The Luminous Mysteries',
    days: ['thursday'],
  },
];

export const mysteryDetails: Record<string, string[]> = {
  joyful: [
    '1. The Annunciation',
    '2. The Visitation',
    '3. The Nativity of Our Lord',
    '4. The Presentation of Jesus at the Temple',
    '5. The Finding of Jesus at the Temple',
  ],
  sorrowful: [
    '1. The Agony in the Garden',
    '2. The Scourging at the Pillar',
    '3. The Crowning with Thorns',
    '4. The Carrying of the Cross',
    '5. The Crucifixion',
  ],
  glorious: [
    '1. The Resurrection',
    '2. The Ascension',
    '3. The Descent of the Holy Spirit',
    '4. The Assumption of Mary',
    '5. The Coronation of Mary as Queen of Heaven',
  ],
  luminous: [
    '1. The Baptism of Jesus in the Jordan',
    '2. The Wedding Feast at Cana',
    '3. The Proclamation of the Kingdom of God',
    '4. The Transfiguration',
    '5. The Institution of the Eucharist',
  ],
};

export function getHailMaryPrayers(count: number): Prayer[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `hail-mary-${i + 1}`,
    title: `Hail Mary (${i + 1}/${count})`,
    text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    type: 'decade',
  }));
}

export const closingPrayers: Prayer[] = [
  {
    id: 'hail-holy-queen',
    title: 'Hail, Holy Queen',
    text: 'Hail, holy Queen, Mother of mercy, hail, our life, our sweetness, and our hope! To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this vale of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary!',
    type: 'closing',
  },
  {
    id: 'final-blessing',
    title: 'Final Blessing',
    text: 'May the divine assistance remain always with us. Amen.',
    type: 'closing',
  },
];
