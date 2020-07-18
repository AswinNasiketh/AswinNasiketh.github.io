"use strict";

prj_descs = [{
  'Name': "Wind Turbine Localisation",
  'Description': "BladeBug is a hexapod which is used to inspect and repair wind turbine blades. In order to locate defects on the blade, a system to locate the BladeBug on the blade is required. Turbine blades are large, featureless surfaces, with no gurantee of line of sight between two points, making visual localisation systems unfeasible. For this project we explored 3 different solutions, 2 of which I worked on: UWB Multilateration and Sound Localisation. <br> <br> The first idea involves suspending a chain of UWB (Ultrawide-band) transceivers inside the blade, and placing one on board the BladeBug. The transceivers are capable of finding the distances to each other, allowing for the BladeBug to be located via multilateration when 3 or more distances from it to the internal transceivers is known. The second idea involves a series of sound emmitters being placed in a ring on the root of the blade and a mic on board the BladeBug. The sound wave propagation times from each emmitter to the BladeBug can then be used to estimate the position of the BladeBug on the blade. I worked on the microphone amplification circuitry and the digital signal processing required to recognise the sounds emitted.",
  'Footer': ""
}, {
  'Name': "Hardware Function Acceleration",
  'Description': "This project was done as coursework for my 3rd Year Digital System Design Course. The objective was to impelement a custom instruction block for a NIOS II processor in order to reduce the latency of a vector floating point operation, whilst ensuring that FPGA resource utilisation does not become too high. The implementation of the custom instruction block began with replacing each software mathematic operation (addition, multiplication, cosine, etc.), which involved designing a custom CORDIC module in Verilog HDL. After this, the blocks were combined and a pipeline was implemented to reduce latency due to intermediate results being returned to the processor. In the end we managed to reduce the latency of the vector floating point operation from 141 seconds to 8 seconds with the resource ultilisation increasing from 2% to 5%.",
  'Footer': ""
}, {
  'Name': "VeriTINY",
  'Description': "VeriTINY is a Verilog simulator which allows combinatorial blocks to be defined using a subset of Verilog, and then connected in circuits with registers using a block diagram editor. After this the circuit can be simulated cycle by cycle with the states of each net in the circuit being outputted. VeriTINY's core was written in pure functional F# (no mutability). It's UI is a modified version of the popular Visual2 ARM Assembly emulator. The whole project is compiled from F# to JavaScript to run on the electron framework via FABLE. This project was done as coursework for my 3rd Year High Level Programming Course.",
  'Footer': ""
}, {
  'Name': "ControlBand",
  'Description': "ControlBand is a wearable wristband which allows for gesture control of smart home devices through IFTTT. This project was completed as coursework for my 3rd Year Embedded Systems Course. The ControlBand consists of a Raspberry Pi Zero connected to a 3 Axis Accelerometer. The Raspberry Pi samples the accelerometer data and performs simple peak detection and orientation correction in order to find out which of 6 directions the user's arm has moved. Upon finding the direction, it is mapped to an IFTTT action and the IFTTT API is called. This action is configurable through a user interface. In the initial stages, machine learning techniques were also explored in order to detect gesture, but became unfeasible. A marketing website for this project can be found at this link <a href= 'https://droptable537542745.wordpress.com/' target = '_blank'> ControlBand Website</a>.",
  'Footer': ""
}, {
  'Name': "Wattown 2.0",
  'Description': "Wattown 2.0 is a smart grid demonstrator which shows how renewable energy generation and storage could work in a city of the future. An on board Raspberry Pi 3 is used to control addressable LEDs, motors and a minature fuel cell on the model. The Pi can operate in 3 modes: interactive, simulation and game. In interactive mode, users can interact with the model by blowing on wind turbines and shining light on the solar panels and see how the energy flows around the city. In simulation mode,a configurable simulation of any number of days in the city is demonstrated. In game mode, the user can perform the energy balancing operations of the smart grid in order to keep the city powered for the longest time. <br> <br> Once the demonstrator was completed, it was to be integrated into a digtal substaion demonstrator in the department. The model was to monitor the network packets in the digital substation in respond to and trigger events on the model and in the substation. During this integration, the cybersecurity aspect of digital substations was also investigated. The substation integration was done as part of an Undergraduate Research Oppurtunity at the Energy Futures Lab at Imperial College London.",
  'Footer': ""
}, {
  'Name': "BagTrack",
  'Description': "BagTrack is a smart item tracking backpack which was designed as part of my 2nd Year Group Project. The backpack uses custom semi passive RFID tags to track items leaving and entering the bag, and geotags them using a companion Android App. The app is used as a UI and allows for new tags to be registered, and shows the user where they were taken out and put back in. BagTrack also has a built in GPS and GSM module which can be used to track the bag itself in the event it is lost or stolen. The tags operate on a coin cell battery with an estimated battery life of up to approximately 270 days, and the bag itself operates on Li-Iob batteries and includes power saving features such as movement detection, giving it an estimated battery life of up to one week. A marketing website for BagTrack can be found at this link:  <a href= 'https://sreetejaj.github.io/BagTrack/' target = '_blank'> BagTrack Website</a>",
  'Footer': ""
}, {
  'Name': "Imperial Racing Green",
  'Description': "Imperial Racing Green is the Formula Student team for Imperial College London which designs electric race cars. In this team, I designed the Brake System Plausibility Device which ensures that the driver does not use the motor throttle and brakes at the same time. The system was implemented as a standalone PCB using tuneable analog RC timers and comparators.",
  'Footer': ""
}, {
  'Name': "Resistor Scanner",
  'Description': "Resistor Scanner is a personal project which I did to explore computer vision. It is a Python program which can locate the colour bands on a resistor and identify its value. Techniques such as thresholding and histogram equalisation are first used to simplify and improve the image, after which Canny Edge detection is used to locate the colour bands. Once the colour bands are located, the colours are sampled and a dictonary is used to calculate the resistance value.",
  'Footer': ""
}, {
  'Name': "EEERover",
  'Description': "Remote-controlled rover which is used to identify different substances using their emitted signal. EEERover was completed as part of my 1st Year Group Project course. The rover has circuitry onboard to detect and amplify analog signals (Ultrasound, Infrared, Radio) to a suitable level for sampling by an Arduino MCU. The Arduino MCU runs a program to sample the analog signals, and relay the data to an Android App via UDP over WiFi. The Android app uses matches this data to a potential substance which is to be identified. The Android app also provides a Joystick UI to control the movement of the rover. The Joystick data is sent via WiFi to the Arduino on board the rover which uses it to control 4 on board motors.",
  'Footer': ""
}, {
  'Name': "Breeze Simulator",
  'Description': "Breeze Simulator is an Android App game which I made as part of my A-Level Computer Science Coursework. The app uses real time weather data to simulate how much energy a user defined renewable energy system could generate in 3 locations. The weather data is sampled from an API and distributed to devices running the app by a backend service written in PHP, which also handles API requests from the app regarding user accounts. Information about each user's energy generation is aggregated in a database and can be visualised in a leaderboard through a web interface.",
  'Footer': ""
}, {
  'Name': "Constructing and Programming a Quadcopter",
  'Description': "This project was completed for my A-level Extended Project Qualification. During this project I programmed an Arduino MCU to use Inertial Measurement Unit data to control 4 brushless motors mounted on a self designed, 3D printed frame, using a PID algorithm. A remote control was also designed to provide a reference value for the PID algorithm.",
  'Footer': ""
}];