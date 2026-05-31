// ============================================================================
// LANDING PAGE LAYOUT SWITCHER
// ============================================================================
// To review previous designs, comment out the active layout and uncomment
// the one you want to view. All previous layouts are saved in the 
// `app/components/landing/` directory.
// ============================================================================

// 1. Brutalist Landing (Stark terminal, high contrast developer aesthetic)
// import LandingLayout from "./components/landing/BrutalistLanding";

// 2. Neo-Modern Landing (Dark mode, glowing orbs, frosted glass bento grid)
// import LandingLayout from "./components/landing/NeoModernLanding";

// 3. Light Glass Landing (White theme, watercolor mesh, frosted glass grid)
// import LandingLayout from "./components/landing/LightGlassLanding";

// 4. Blueprint Landing (Interactive Mobile Preview + Light Glass Theme)
import LandingLayout from "./components/landing/BlueprintLanding";

export default function Page() {
  return <LandingLayout />;
}
