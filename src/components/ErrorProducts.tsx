interface ErrorMassageProps {
  error: string
}
const ErrorProducts = ({ error }: ErrorMassageProps) => {
  return <p className="text-center text-red-600">{error}</p>
}

export default ErrorProducts
