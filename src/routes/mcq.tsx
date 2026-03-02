import SidebarPage from '@/components/SidebarPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mcq')({
  component: MCQ,
})

function MCQ() {
  return <SidebarPage />
}