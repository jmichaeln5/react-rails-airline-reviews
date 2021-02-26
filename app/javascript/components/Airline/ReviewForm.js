import React, {Fragment} from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingContainer = styled.div`
`

const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position relative;

  input{
    display: hidden;

  }

  label{
    cursor:pointer;
    width: 40px;
    height:40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat:no-repeat;
    background-position:center;
    background-size: 70%
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not:checked ~ label:hover,
  input:not:checked ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`

const RatingTitle = styled.div`
`

const ReviewForm = (props) => {

  const ratingOptions = [5,4,3,2,1].map( (score, index) => {
    return(
      <Fragment>
      <input type="radio" value={score} name="rating" className="" onChange={() => console.log('selected:', score)} id={`rating-${score}`}/>
      <label className="p-2"></label>
      </Fragment>
    )
  })

  // return(
  //   <div className="wrapper">
  //     <form onSubmit={props.handleSubmit}>
  //       <div>Have an experience with {props.attributes.name}? Share your review!</div>
  //       <div className="field">
  //       <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
  //       </div>
  //       <div className="field">
  //       <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review description" />
  //       </div>
  //       <div className="field">
  //         <RatingContainer>
  //           <div className="rating-title-text"> Rate This Airline</div>
  //           <RatingBox>
  //             {ratingOptions}
  //           </RatingBox>
  //         </RatingContainer>
  //       </div>
  //
  //       <button type="submit">Submit Review </button>
  //     </form>
  //   </div>
  // )


  return(
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>Have an experience with {props.attributes.name}? Share your review!</div>
        <div className="field">
        <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
        </div>
        <div className="field">
        <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review description" />
        </div>
        <div className="field">
<RatingContainer>


            <div className="rating-title-text"> Rate This Airline</div>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
</RatingContainer>


        </div>

        <button type="submit">Submit Review </button>
      </form>
    </div>
  )



}

export default ReviewForm;
