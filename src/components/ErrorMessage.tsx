interface ErrorMessageProps {
  error: string
}
export default function ErrorMessage(props: ErrorMessageProps) {
  return <p className="text-center text-lg text-red-700">{props.error}</p>
}
