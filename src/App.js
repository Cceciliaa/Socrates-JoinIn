import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import { Steps, Icon } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

import InputQuestion from './Components/InputQuestion';
import AnswerBox from './Components/AnswerBox';
import VoteAnswer from './Components/VoteAnswer';
import Validate from './Components/validate';
import './Links.css';

import './App.css';

const Step = Steps.Step;
const { Header, Content, Footer } = Layout;

// All of our functionality is currently in the App class.
class App extends Component {

  constructor() {
    super();
    // Contains our properties:
    this.state = {
      // The question currently being asked:
      question: '',
      // The students that could be selected:
      student_name: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum',
        'Mason', 'Robert', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'Thomas', 'Joe', 'Ethan', 'David',
        'George', 'Reece', 'Richard'],
      // The students that are chosen from all possible students (4)
      chosenStudents: [],
      // The answers that each student gives.
      answersArray: [],
      // Which student are we on:
      currentID: 0,
      // At what point in this process are we?
      status: 'question'
    }
    // BRETT --> Not sure what this does?
    this.handleClick = this.handleClick.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.reset = this.reset.bind(this)
  }

  // Updates the current question and move the status to the next section:
  addQuestion = (question) => {
    this.setState({ question: question })
  }

  // Get a random, small group of students from all the students. 
  getRandomSubarray = (arr, size) => {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  }

  // What to do with clicks --> Don't understand this entirely.
  handleClick = (e) => {
    // Get for students.
    let studentList = this.getRandomSubarray(this.state.student_name, 4);
    // Mark these students as our selected students:
    this.setState({ chosenStudents: studentList });
    // ? Answered questions?
    let asw_Arr = [];
    // Go through the student list
    for (let i = 0, len = studentList.length; i < len; i++) {
      // Create a an array which shows each student, their answer, the amount of votes they recieved, and their ID:
      asw_Arr = asw_Arr.concat({ student: studentList[i], answer: '', vote: 0, studentID: i })
    }
    // This is the array which contains the array with all of the answers..
    this.setState({ answersArray: asw_Arr, status: 'answer' })
  }

  // Add an answer to the answer array.
  addAnswer = (answer) => {
    // Get the current state
    let student = this.state.chosenStudents[this.state.currentID];
    // 
    let newAnswersArray = this.state.answersArray.filter(
      info => info.student !== student);
    // Put in the new items.
    newAnswersArray.splice(this.state.currentID, 0, { student: student, answer: answer, vote: 0, studentID: this.state.currentID })
    // Go to the next answer.
    this.setState({ answersArray: newAnswersArray, studentID: this.state.currentID += 1 })
    this.handleAnswer();
  }

  // Brings us into the vote stage.
  handleAnswer() {
    // 
    if (this.state.currentID >= 4) {
      // IF all four students have voted,
      this.setState({ status: 'vote' })
    }
  }

  // 
  handleVote = (studentID) => {
    this.setState({ currentID: studentID });
    let noVote = this.state.answersArray.filter(std => std.studentID !== studentID);
    noVote.splice(studentID, 0, {
      student: this.state.answersArray[studentID].student,
      answer: this.state.answersArray[studentID].answer,
      vote: this.state.answersArray[studentID].vote += 1,
      studentID: studentID
    })
    console.log(noVote)
    return noVote;
  }

  setVote = (studentID) => {
    let noVote = this.handleVote(studentID);
    this.setState({ answersArray: noVote })
  }

  goToValidate = () => {
    this.setState({ status: 'validate' })
  }

  reset = () => {
    this.setState({
      question: '',
      chosenStudents: [],
      answersArray: [],
      currentID: 0,
      status: 'question'
    })
  }

  changeBackground(color) {
    document.body.style.background = color;
  }


  handlePage = () => {
    if (this.state.status === 'question') {
      this.changeBackground('#f5a97e')
      return (
        <div>
          <div className="CoolText">
            <InputQuestion addQuestion={this.addQuestion} chooseStudent={this.handleClick} />
          </div>
          {/* <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div> */}
        </div>
      )
    } else if (this.state.status === 'answer') {
      this.changeBackground('cornflowerblue')
      return (
        <div className="answer">
          <div>
            <h3 id='q'>Question: {this.state.question}</h3>
          </div>
          <div className="alert alert-info" role="alert">
            <AnswerBox question={this.state.question}
              addAnswer={this.addAnswer}
              chosenStudents={this.state.chosenStudents}
              student={this.state.chosenStudents[this.state.currentID]} />
          </div>
        </div>
      )
    } else if (this.state.status === 'vote') {
      this.changeBackground('cornflowerblue')
      return (
        <div>
          <div>
            <h3 id='q'>Question: {this.state.question}</h3>
          </div>
          <div className="vote">
            <VoteAnswer question={this.state.question} answersArray={this.state.answersArray} handleVote={this.setVote}
              goToValidate={this.goToValidate} />
          </div>
        </div>
      )
    } else if (this.state.status === 'validate') {
      this.changeBackground('#f5a97e')
      return (
        <div className="validate">
          <div>
            <h3 id='q'>Question: {this.state.question}</h3>
          </div>
          <div className="alert alert-info" role="alert">
            <Validate question={this.state.question} answersArray={this.state.answersArray} />
          </div>
          <div>
            <Button type="primary" onClick={this.reset} className="select">Reset</Button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
                <Steps className="steps">
                  <Step status="finish" title={<p className="nvg">Input Question</p>} icon={<Icon type="user" />}></Step>
                  <Step status="finish" title={<p className="nvg">Input Answer</p>} icon={<Icon type="solution" />}></Step>
                  <Step status="process" title={<p className="nvg">Vote</p>} icon={<Icon type="loading" />}></Step> 
                  <Step status="finish" title={<p className="nvg">Validate</p>} icon={<Icon type="smile-o" />}></Step> 
                </Steps>
            </Menu>
          </Header>
        </Layout>
        <header className="App-header">
          <this.handlePage />
        </header>
      </div>
    )
  }
}


export default App;
