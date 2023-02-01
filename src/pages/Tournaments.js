import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import {  Block , Title, Text, Metric, ColGrid, Divider} from '@tremor/react'


function Tournaments() {
  const TournamentsJson= [
    {
    name: "Tournament 1",
    numberOfTeams: 10,
    numberOfPlayers: 150
    },
    {
      name: "Tournament 2",
      numberOfTeams: 16,
      numberOfPlayers: 350
      },
      {
        name: "Tournament 3",
        numberOfTeams: 20,
        numberOfPlayers: 500
        },
        {
          name: "Tournament 4",
          numberOfTeams: 10,
          numberOfPlayers: 150
          },
          {
            name: "Tournament 5",
            numberOfTeams: 16,
            numberOfPlayers: 350
            },
            {
              name: "Tournament 6",
              numberOfTeams: 5,
              numberOfPlayers: 80
              }       
      ];
  return (
    <main className="bg-slate-200 p-6 sm:p-10">
    <br></br>   
    <Card.Title>TournamentsPage</Card.Title>  
    <Divider />
          <ColGrid numColsMd={2} numColsLg={3} marginTop='mt-6' gapX='gap-x-6' gapY='gap-y-6'>
        {TournamentsJson.map(tournament =>(
          <Card style={{ width: '25rem' }} ecoration="top" decorationColor="indigo">
            <CardImg src="../img/tournaments.jpeg"/>
            <Card.Header><Card.Title>{tournament.name}</Card.Title></Card.Header>
            <Text>Number of Teams:</Text>
            <Metric>{tournament.numberOfTeams}</Metric>
            <Text>Number of Players:</Text>
            <Metric>{tournament.numberOfPlayers}</Metric>
          </Card>        
          ))}
          </ColGrid>

  </main>
  )
}

export default Tournaments