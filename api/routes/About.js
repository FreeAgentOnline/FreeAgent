import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";


export default class About extends Component {
    render(){
        return (
            <ScrollableAnchor className="aboutAnchor" id={'about'}>
                <div id="aboutMe">
                <h1>first image of me with brick background here, either a circle or small square in center of the page</h1>

                    What does it mean to turn lemons to lemonade?
                    Life is seasoned (sprinkled) with challenges, and we are defined by the ways we address and respond to those challenges.

                    My goal has always been to, no matter the circumstance, find the sweetness.
                    <h1>How do I make my lemonade?</h1>
                    <h3>My Strengths</h3>
                    <h2>Start with lemons...</h2>
                    <p>Challenges aren't inherently bad. I've found that most of my growth comes from all the challenges that I face. No one said making lemonade would be easy (said my Mom when I'd make some terrible mixtures for the fam as a youngin), but you can definitely face the challenge every time and aim for improvement (more than last time! Just being  better this time than you were last time should be your first and main goal going into any challenge )</p>
                    <hr/>
                    <h2>..then add lots of water...</h2>
                    <p>Next, I change my perspective. This challenge is now a vehicle that I can use to create a solution that hasn't existed before [???] to a problem.</p>
                    <hr/>
                    <h2>....then add LOTS of sugar!</h2>
                    <p>Make it sweet! I'm a firm believer that everything will work out for the better if you put a positive spin on it! My optimistic perspective and diligence towards a task allow me to see my goals through to ther completion!</p>
                    <p>Sugar is the last step. Part of it comes in the process and part of it comes from the final product. Nonetheless, I enjoy what I'm doing. I enjoy the process. [But either way,]there's beauty in the struggle of things, and it's a part of what makes getting the end result, the perfect Lemonade!</p>




                <h1 className="gifPlaceholder"> This is where I want to put the lemonade gif</h1>
                </div>
            </ScrollableAnchor>

        )
    }
}
