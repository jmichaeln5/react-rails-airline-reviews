import React, {useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'

const Airline = (props) => {
  const [airline,setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  // const Wrapper = styled.div`
  //   margin-left: auto;
  //   margin-right: auto;
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  // `
  //
  // const Column = styled.div`
  //   background: #fff;
  //   height: 100vh;
  //   overflow: scroll;
  //   &:last-child {
  //     background: black;
  //     border-top: 1px solid rgba(255,255,255,0.5);
  //   }
  // `
  //
  // const Main = styled.div`
  //   padding-left: 60px;
  // `

  useEffect(()=> {
  const slug = props.match.params.slug

  axios.get(`/api/v1/airlines/${slug}`)
  .then( (resp) => {
    setAirline(resp.data)
    setLoaded(true)
  })
  .catch( data => console.log('Error', data) )}, [])

  const handleChange = (e) => {
    e.preventDefault()
      setReview(Object.assign({}, review,  {[e.target.name]: e.target.value}))
      console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const airline_id = airline.data.id

    axios.post('/api/v1/reviews', {review, airline_id})
    .then(resp => {
      const included = [...airline.included, resp.data.data]
      setAirline({...airline, included})
      setReview({title: '', description: '', score: 0})
    })
    .catch(resp => {
    })
  }

  // return (
  //   <Wrapper>
  //   {
  //   loaded &&
  //   <Fragment>
  //     <Column>
  //       <Main>
  //         <Header
  //           attributes={airline.data.attributes}
  //           reviews={airline.included}
  //         />
  //       <div className="reviews"> </div>
  //       </Main>
  //     </Column>
  //     <Column>
  //       <ReviewForm
  //         handleChange={handleChange}
  //         handleSubmit={handleSubmit}
  //         attributes={airline.data.attributes}
  //         review={review}
  //       />
  //     </Column>
  //   </Fragment>
  //   }
  //   </Wrapper>
  // )


  const setRating = (score, e) => {
    e.preventDefault()
  }

  return (
    <div>
      {
    loaded &&
    <Fragment>
      <div>
        <div>
          <Header
            attributes={airline.data.attributes}
            reviews={airline.included}
          />
        <div className="reviews"> </div>
        </div>
      </div>
      <div>
        <ReviewForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setRating={setRating}
          attributes={airline.data.attributes}
          review={review}
        />
    </div>
    </Fragment>
    }
    </div>
  )
}

export default Airline;
