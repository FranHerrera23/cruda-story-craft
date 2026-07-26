import Nav from '@/components/Nav'
import '@/components/case-study.css' // provides --white, --ink, --ink-2, --red, --cream, --rule, --rule-2

export default function AIConciergeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
