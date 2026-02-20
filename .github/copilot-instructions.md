## Rosary - Next.js Prayer Guide Application

A beautiful step-by-step guide to praying the Catholic Rosary. This application walks users through each prayer of the rosary with support for all four mysteries (Joyful, Sorrowful, Glorious, and Luminous).

### Features

- **Mystery Selection**: Choose which mysteries to pray based on the day of the week
- **Step-by-Step Guidance**: Walk through every prayer of the rosary with clear instructions
- **Progress Tracking**: Visual progress bar showing position in the prayer sequence
- **Navigation**: Easy navigation between prayers (Previous/Next buttons)
- **Completion Celebration**: Special screen when the rosary is complete
- **Responsive Design**: Beautiful interface optimized for mobile and desktop

### Prayer Sequence

The app guides users through:
1. Opening Prayers (Sign of the Cross, Apostles' Creed, Our Father, 3 Hail Marys, Glory Be)
2. Five mysteries with meditations
3. For each mystery:
   - Mystery announcement for meditation
   - Our Father
   - 10 Hail Marys (one decade)
   - Glory Be
   - O My Jesus (except after the last mystery)
4. Closing Prayers (Hail Holy Queen, Final Blessing)

### Mysteries

- **Joyful Mysteries**: Monday & Saturday
- **Sorrowful Mysteries**: Tuesday & Friday  
- **Glorious Mysteries**: Wednesday & Sunday
- **Luminous Mysteries**: Thursday

### Project Structure

- `src/app/page.tsx` - Home page with mystery selector
- `src/app/pray/[mystery]/page.tsx` - Prayer guide page
- `src/components/MysterySelector.tsx` - Mystery selection component
- `src/components/PrayerDisplay.tsx` - Prayer display component
- `src/components/NavigationButtons.tsx` - Navigation controls
- `src/data/prayers.ts` - All prayer text and mystery data

### Getting Started

**Development Server:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

**Build for Production:**
```bash
npm run build
npm start
```

**Run Linter:**
```bash
npm run lint
```

### Key Technologies

- **Framework:** Next.js 16.1.6 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Turbopack
- **Linting:** ESLint

### Development Guidelines

- Follow ESLint rules for code quality
- Use TypeScript for type safety
- Leverage Tailwind CSS for styling
- Use React Server Components by default, Client Components ('use client') only when needed for state management
- Keep prayer text and mystery data in `src/data/prayers.ts`

### Adding New Features

To add new features:
1. Update prayer data in `src/data/prayers.ts` if needed
2. Create components in `src/components/`
3. Create pages in `src/app/`
4. Run `npm run lint` to ensure code quality
5. Test in the development server

### Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Catholic Encyclopedia - The Rosary](https://www.catholic.com/encyclopedia/rosary)

### Git Workflow

- Meaningful commit messages
- Follow existing code style
- Run `npm run lint` before committing
- Keep commits focused and atomic

