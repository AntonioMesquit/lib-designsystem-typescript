import {
  CloseIcon,
  Subtitle,
  Title,
  ToastContainer,
  ToastContent,
} from './styles'
export interface ToastProps {
  title: string
  date: Date
  onClose: () => void
}
export function Toast({ title, date, onClose }: ToastProps) {
  const formattedDate = Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(date)
  const formattedHour = Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
  }).format(date)
  return (
    <ToastContainer>
      <ToastContent>
        <Title>{title}</Title>
        <Subtitle>
          {formattedDate} às {formattedHour}h
        </Subtitle>
      </ToastContent>
      <CloseIcon onClick={onClose} />
    </ToastContainer>
  )
}
