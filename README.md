## Project description

Class participation in large humanity or social science lectures is typically lower. However, both students and professors want more interactions. This demo application, called "Joinin", is designed for the professors and students in such classes, aiming to facilitate the communications between them. In particular, it helps to keep students engaged by enabling them to either contribute an answer or vote on an answer whenever the professor asks an open-ended question.

### Remark

This is only a demo rather than the final version of the app. It shows the interfaces of both the professors and the students, and illustrates the basic flow of our design. The orange background indicates the professor's interfaces, and the blue background indicates the students'. 

### Functionality

The professor can input the question from his interface. On submission, the app will randomly select four students from the recorded name list, and push the question to their interfaces. The four selected students will have to input their answers within some time limits, and their answers will later be sent to the rest of the students as four answer choices. Students receiving the multiple-choice question can vote for the answers that they agree with by clicking on them. After the voting session, the professor can get the voting result by click on the "validate" button, base on which he can grasp the learning pace of his students, and explain the question by analysing the four answers. The "reset" button will clear the data and return to the interface for the professor to input his/her question.

### App deployment

Link to [Heroku CLI](https://joinin-socrates.herokuapp.com)

For deployment on mobile phones, scan: 
![QR code](Joinin.png) 

### Future improvement

i> Add a toggle for the professor at the input question interface, allowing him or her to choose whether to allow anonymous answers to the current question or not.

ii> Add a "None of the above" buttom as well as an optional input bar at the interface of students voting for the answers, allowing them to contribute their alternitive answers.

iii> Seperate the operation ports of the professors and students, and share data through firebase.


