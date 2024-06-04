import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Count() {
  return (
    <>
      <Button>-</Button>
      <input type="number" />
      <Button>+</Button>
    </>
  )
}
