import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function CardWrapper() {
  const [Data, SetData] = useState([]);
  const [modal, setModal] = useState(false);
  const [DataMovie, SetDataMovie] = useState();
  const [Confirmation, SetConfirmation] = useState(true);
  const [Movie, SetMovie] = useState("");


  function GetData() {

    axios.get("http://localhost:3500/Movies")
      .then((response) => { SetData(response.data) })
      .catch((err) => { console.log(err) });

  }
  function GetMovies() {
    console.log(DataMovie)
    axios.get(`http://localhost:3500/Movie/${DataMovie?.room?.id}/${DataMovie?.Hour}`)
      .then((response) => {
        SetMovie(response.data)
        console.log(response.data)
      })
  }
  function PurchaseTicket(){
    console.log(Movie)
    axios.post("http://localhost:3500/insertTicket",Movie)
    .then((response)=>{alert(response.data)})

  }
  useEffect(() => {
    GetData();
    GetMovies();
  }, [modal])

  function ModalContent() {

    SetDataMovie("")
    return (
      <div>
        <Modal isOpen={modal}>
          <ModalHeader className="MovieTitle">
            Titulo do filme: {Movie[0]?.Name}
          </ModalHeader>
          <ModalBody>
            <p className="Informations">Sinopse: {Movie[0]?.Sinopse} </p>
            <p className="Informations">Duração: {Movie[0]?.Duration}</p>
            <p className="Informations">
              Horários disponiveis: {Movie[0]?.Hour}
            </p>
            <p
              className="Informations"
              style={
                Movie[0]?.Ticket <= 0 ? { color: "red" } : { color: "green" }
              }
            >
              Ingressos:{Movie[0]?.Ticket}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color={Movie[0]?.Ticket <= 0 ? "danger" : "primary"}
              disabled={Movie[0]?.Ticket <= 0 ? true : false}
              onClick={() => {
                PurchaseTicket();
              }}
            >
              Comprar ingresso
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => {
                setModal(!modal);
              }}
            >
              Voltar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );

  }


  return (
    <>
      <div class="container">
        <div class="row align-items-start">
          {Data.map((index) => {
            return (
              <>
                <div class="col">
                  <div className="Card">
                    <p className="roomTitle">Sala: {index?.room?.nRoom}</p>
                    <p className="subtitle"> Filme: {index?.Name}</p>
                    <p className="subtitle">
                      Ingressos disponíveis: {index?.Ticket}
                    </p>
                    <button
                      className="btnDetails"
                      onClick={() => {
                        SetDataMovie(index);
                        setModal(true);
                      }}
                    >
                      Detalhes
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <>{Confirmation ? <ModalContent /> : null}</>
    </>
  );
}