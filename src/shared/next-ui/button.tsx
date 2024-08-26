import {Button} from '@nextui-org/react'

export default function ButtonUI({ children }: { children: React.ReactNode }) {
  return (
      <Button>
        {children}
      </Button>
  )
}