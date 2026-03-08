# Birthday Surprise Web App - Specification Document

## Project Overview
- **Project Name:** Birthday Surprise for Love
- **Project Type:** Interactive React Web Application
- **Core Functionality:** A multi-page romantic birthday surprise experience with quizzes, memories, and special reveals
- **Target Users:** Girlfriend/Partner on their birthday
- **Tech Stack:** React.js + Vite, Tailwind CSS, Framer Motion

---

## UI/UX Specification

### Color Palette
- **Primary Gradient:** `#FF6B9D` (Hot Pink) → `#C44569` (Deep Pink) → `#8E44AD` (Purple)
- **Secondary:** `#F8B500` (Golden Yellow for accents)
- **Background:** Linear gradient from `#FFE6EE` to `#F5E6FF` to `#E6F0FF`
- **Text Primary:** `#4A1942` (Dark Maroon)
- **Text Secondary:** `#7B4B6E` (Muted Pink)
- **White:** `#FFFFFF`
- **Heart Red:** `#FF4757`
- **Gold:** `#FFD700`

### Typography
- **Primary Font:** 'Poppins', sans-serif (Google Fonts)
- **Display Font:** 'Dancing Script', cursive (for romantic titles)
- **Heading Sizes:** 
  - H1: 3.5rem (56px)
  - H2: 2.5rem (40px)
  - H3: 1.75rem (28px)
- **Body:** 1.125rem (18px)
- **Small:** 0.875rem (14px)

### Spacing System
- **Container Padding:** 2rem (32px)
- **Section Spacing:** 4rem (64px)
- **Element Gap:** 1.5rem (24px)
- **Card Padding:** 2rem (32px)

### Visual Effects
- **Card Shadow:** `0 20px 60px rgba(255, 107, 157, 0.3)`
- **Button Shadow:** `0 10px 30px rgba(255, 107, 157, 0.4)`
- **Glass Effect:** `backdrop-blur(10px)` with semi-transparent white
- **Border Radius:** 20px for cards, 50px for buttons

### Animations
- **Page Transitions:** Fade + slide (0.5s ease)
- **Button Hover:** Scale 1.05, shadow increase
- **Floating Hearts:** Continuous float animation (3-5s loop)
- **Gift Box:** Bounce + shake on hover, explode on click
- **Confetti:** Particle explosion on final page
- **Text Reveal:** Typewriter + fade effect

---

## Page Specifications

### Page 1: Welcome Screen
- Full viewport height
- Centered content
- Main text: "Hey Love ❤️ I made something special for your birthday."
- Subtitle: Small decorative text
- Big CTA Button: "Start Your Surprise 🎁"
- Background: Floating hearts animation (20+ hearts)
- Button: Gradient background, pulse animation

### Page 2: Gift Box
- Large animated gift box (200x200px)
- Text: "Tap the gift to unlock your birthday surprises."
- Gift box states:
  - Idle: Gentle floating
  - Hover: Bounce + shake
  - Click: Explode animation, reveal contents
- Click triggers page transition to Page 3

### Page 3: Memory Quiz
- Quiz title: "Our Memory Quiz ❤️"
- Progress indicator (3 questions)
- Question card with:
  - Question number
  - Question text
  - 3 option buttons
- Options: Rounded buttons with hover effects
- After all questions:
  - Success message: "Wow! You know us so well ❤️"
  - Score display
  - "Unlock Next Surprise" button
- Questions:
  1. "Where did we meet first?" - Options: [School, Coffee Shop, Park, Mall]
  2. "What is our favorite food together?" - Options: [Pizza, Sushi, Pasta, Burgers]
  3. "Which movie did we watch first?" - Options: [Romantic Comedy, Action, Horror, Drama]

### Page 4: Reasons I Love You
- Title: "Reasons Why I Love You ❤️"
- Subtitle: "Click to see why you're amazing"
- Central button: "Click to See Why I Love You ❤️"
- Display area for random reasons
- Each reason appears with flip/fade animation
- Minimum 50 romantic reasons stored

### Page 5: Memory Gallery
- Title: "Some of my favorite memories with you ❤️"
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- 6 placeholder images with:
  - Rounded corners
  - Hover: Scale up + shadow
  - Entry animation: Staggered fade-in
- Decorative frame effects

### Page 6: Final Surprise
- Full screen dramatic reveal
- Large animated "Happy Birthday My Love ❤️"
- Romantic message paragraph
- Video button: "Play Your Birthday Surprise 🎬"
- Click opens embedded YouTube video (modal)
- Confetti animation triggered on page load

---

## Components List

1. **App.jsx** - Main router and state manager
2. **WelcomePage.jsx** - Landing page with floating hearts
3. **GiftBoxPage.jsx** - Interactive gift box
4. **QuizPage.jsx** - Memory quiz component
5. **ReasonsPage.jsx** - Random love reasons
6. **GalleryPage.jsx** - Photo gallery
7. **FinalPage.jsx** - Final celebration
8. **FloatingHearts.jsx** - Background animation
9. **Confetti.jsx** - Celebration effect
10. **VideoModal.jsx** - YouTube embed modal

---

## Functionality Specification

### State Management
- `currentPage`: Track current page (1-6)
- `quizAnswers`: Store user answers
- `quizScore`: Track correct answers
- `currentReason`: Current displayed reason
- `isVideoOpen`: Video modal state

### User Interactions
- Button clicks navigate between pages
- Quiz options are selectable (single choice)
- Gift box click triggers animation + navigation
- Reason button generates random reason
- Gallery images have hover effects
- Video button opens modal

### Animations (Framer Motion)
- Page transitions: AnimatePresence
- Button hover/tap: scale + opacity
- List items: staggered entrance
- Gift box: keyframe animations
- Hearts: continuous floating

---

## Responsive Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## Acceptance Criteria

1. ✅ All 6 pages render correctly
2. ✅ Smooth page transitions between all pages
3. ✅ Floating hearts animation works on welcome page
4. ✅ Gift box opens with animation on click
5. ✅ Quiz tracks answers and shows score
6. ✅ Random reasons generate on button click
7. ✅ Gallery displays with hover effects
8. ✅ Final page shows confetti animation
9. ✅ Video modal opens and closes properly
10. ✅ Fully responsive on mobile/tablet/desktop
11. ✅ No console errors
12. ✅ Ready for Vercel deployment

---

## 50 Romantic Reasons List

1. Because your smile makes my worst days better
2. Because life feels magical with you
3. Because you are my favorite person
4. Because your laugh is my favorite song
5. Because you understand me without words
6. Because your kindness inspires me daily
7. Because you believe in me even when I don't
8. Because every moment with you is precious
9. Because you make me want to be better
10. Because your eyes hold infinite warmth
11. Because you support all my dreams
12. Because your love is my greatest treasure
13. Because you dance like no one's watching
14. Because you care so deeply for others
15. Because your hugs heal everything
16. Because you see beauty in simple things
17. Because you make ordinary days special
18. Because your voice is my favorite sound
19. Because you challenge me to grow
20. Because your presence calms my soul
21. Because you remember the little things
22. Because you make my heart skip a beat
23. Because you're my biggest cheerleader
24. Because you make life an adventure
25. Because your love is unconditional
26. Because you accept me completely
27. Because you make me feel safe
28. Because your touch is electric
29. Because you light up every room
30. Because you're my best friend
31. Because you make the future exciting
32. Because your thoughts are always caring
33. Because you see the best in me
34. Because you make time stand still
35. Because your love is my home
36. Because you're uniquely wonderful
37. Because you make me laugh daily
38. Because your spirit is beautiful
39. Because you motivate me constantly
40. Because you're my greatest blessing
41. Because you complete my life
42. Because your love is priceless
43. Because you make everything better
44. Because you're my soulmate
45. Because I fall for you more each day
46. Because you're everything I ever wanted
47. Because you make my world complete
48. Because loving you is easy
49. Because you're my forever person
50. Because with you, forever feels just right

