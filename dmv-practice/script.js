const questions = [
  {
    "id": 1,
    "question": "A solid yellow line on your side of the roadway means:",
    "answers": [
      "You may pass carefully",
      "Do not pass",
      "Passing is allowed at night only",
      "Passing is allowed if no traffic is coming"
    ],
    "correct_choice": "Do not pass",
    "explanation": "A solid yellow line on your side means no passing is allowed.",
    "image_filename": "solid-yellow-you.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 2,
    "question": "At a four-way stop, if two vehicles stop at the same time, who goes first?",
    "answers": [
      "The vehicle on the left",
      "The vehicle on the right",
      "The larger vehicle",
      "The vehicle turning left"
    ],
    "correct_choice": "The vehicle on the right",
    "explanation": "At a four-way stop, the vehicle on the right has the right-of-way if both arrive at the same time.",
    "image_filename": "four-way-you-left.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 3,
    "question": "A flashing red traffic signal at an intersection means:",
    "answers": [
      "Slow down and yield",
      "Stop, then proceed when safe",
      "Go straight through",
      "Traffic signal is malfunctioning"
    ],
    "correct_choice": "Stop, then proceed when safe",
    "explanation": "A flashing red light means the same as a stop sign.",
    "image_filename": "flashing-red.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 4,
    "question": "What is the maximum speed limit on most Oregon interstate highways, unless posted otherwise?",
    "answers": [
      "55 mph",
      "60 mph",
      "65 mph",
      "70 mph"
    ],
    "correct_choice": "65 mph",
    "explanation": "The maximum speed limit on most Oregon interstates is 65 mph unless otherwise posted.",
    "image_filename": "interstate-speed-limit.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 5,
    "question": "When must headlights be turned on?",
    "answers": [
      "From sunset to sunrise",
      "Any time visibility is less than 1,000 feet",
      "When using windshield wipers",
      "All of the above"
    ],
    "correct_choice": "All of the above",
    "explanation": "Headlights are required at night, in poor visibility, and when wipers are used.",
    "image_filename": "headlights.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 6,
    "question": "A flashing yellow arrow means:",
    "answers": [
      "Stop immediately",
      "Proceed with caution and yield before turning",
      "Protected left turn only",
      "No turn allowed"
    ],
    "correct_choice": "Proceed with caution and yield before turning",
    "explanation": "A flashing yellow arrow allows a turn after yielding to oncoming traffic.",
    "image_filename": "flashing-yellow-arrow.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 7,
    "question": "When approaching a stopped school bus with flashing red lights on a two-lane road, you must:",
    "answers": [
      "Slow down and pass carefully",
      "Stop and remain stopped until the lights stop flashing",
      "Stop only if children are crossing",
      "Honk and pass"
    ],
    "correct_choice": "Stop and remain stopped until the lights stop flashing",
    "explanation": "Oregon law requires all drivers to stop for a school bus with flashing red lights.",
    "image_filename": "school-bus-flashing.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 8,
    "question": "The legal blood alcohol concentration (BAC) limit for drivers age 21+ in Oregon is:",
    "answers": [
      "0.05%",
      "0.08%",
      "0.10%",
      "Zero tolerance"
    ],
    "correct_choice": "0.08%",
    "explanation": "In Oregon, the legal limit for drivers age 21+ is 0.08% BAC.",
    "image_filename": "bac_limit.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 9,
    "question": "If your vehicle begins to skid, you should:",
    "answers": [
      "Slam on the brakes",
      "Turn the steering wheel in the direction you want the car to go",
      "Turn opposite the skid",
      "Accelerate quickly"
    ],
    "correct_choice": "Turn the steering wheel in the direction you want the car to go",
    "explanation": "Steer in the direction of the skid to regain control.",
    "image_filename": "skid_control.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 10,
    "question": "What does a triangular red and white sign mean?",
    "answers": [
      "Stop",
      "Yield",
      "Wrong Way",
      "Railroad crossing"
    ],
    "correct_choice": "Yield",
    "explanation": "An upside-down triangle means yield to other traffic.",
    "image_filename": "yield_sign.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 11,
    "question": "What does the Keep To The Right sign mean?",
    "answers": [
      "Drive to the right",
      "Right turn Yield",
      "Slower traffic should move to the right",
      "You must turn right at the next intersection"
    ],
    "correct_choice": "Drive to the right",
    "explanation": "KEEP RIGHT. The sign marks a traffic island or a highway divider and it warns you to stay to the right of the obstacle. When this sign is installed at a highway, it may also be accompanied by the DIVIDED HIGHWAY BEGINS yellow warning sign.",
    "image_filename": "keep-right.jpg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 12,
    "question": "Before you change lanes on a multi-lane highway, you should:",
    "answers": [
      "Sound your horn",
      "Turn on your headlights",
      "Reduce your speed",
      "Check your mirrors and blind spots"
    ],
    "correct_choice": "Check your mirrors and blind spots",
    "explanation": "When changing lanes it is important to know where all the cars are around you.",
    "image_filename": "highway-traffic.jpg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 13,
    "question": "A yellow sign with a black X through it and the letters R and R is wanring that you are approaching ...",
    "answers": [
      "An intersection",
      "A crosswalk",
      "A railroad crossing",
      "A blasting zone"
    ],
    "correct_choice": "A railroad crossing",
    "explanation": "The advance warning sign is usually the first sign you see when approaching a highway-rail intersection. The advance warning sign advises you to slow down, look and listen for a train, and be prepared to stop if a train is approaching.",
    "image_filename": "railroad-crossing-ahead.jpg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 14,
    "question": "What does driving do to your driving skills and judgement?",
    "answers": [
      "It helps driving skills but harms your judgement",
      "It harms both driving skills and judgement",
      "It has no effect on either driving skills or judgement",
      "It makes you more limbers and gives you faster to react to dangerous situations"
    ],
    "correct_choice": "It harms both driving skills and judgement",
    "explanation": "Alcohol reduces reaction time, reduces your ability to see clearly, changes your judgment of speed and distances, often makes you less inhibited and makes you more prone to take chances. The important skills you need to drive safely are made weaker.",
    "image_filename": "alcohol-know-the-facts.jpg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 15,
    "question": "You are at a red traffic signal. The traffic light turns green, but there are still other vehicles in the intersection. You should:",
    "answers": [
      "Wait until the other car clears the intersection",
      "Move ahead only if you can go around the other vehicles safely",
      "Enter the intersetion and wait for traffic to clear",
      "Honk your horn to warn other sdrivers of your presence and then enter the intersection"
    ],
    "correct_choice": "Wait until the other car clears the intersection",
    "explanation": "Give the right-of-way to any vehicle, bicyclist, or pedestrian already in the intersection. While the green signal certainly means go, vehicles that entered the intersection before the light turned green have the right-of-way over you.",
    "image_filename": "placeholder.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 16,
    "question": "What does a triangular sign with the word YIELD on it mean?",
    "answers": [
      "Stop until all cars around you are a distance of 100 feet or more.",
      "Reduce speed and yeild the right of way.",
      "Scan the road ahead and slow down if there are other cars approaching.",
      "This area of the road profits heavily from traffic tickets."
    ],
    "correct_choice": "Reduce speed and yeild the right of way.",
    "explanation": "This sign means you should reduce speed and yield right of way. If needed, stop the same as you would for a stop sign. page 7",
    "image_filename": "yield-sign.jpg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 17,
    "question": "What does a yellow sign with a car and curvy lines underneath it mean?",
    "answers": [
      "Curves ahead",
      "Slippery when wet",
      "Obstacles in the road",
      "Swerve to avoid danger"
    ],
    "correct_choice": "Slippery when wet",
    "explanation": "The pavement is unusually slick when wet. page 12",
    "image_filename": "slippery.avif",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 18,
    "question": "Regulatory Prohibitive signs are red and white. Which one of these signs is a regulatory prohibitive sign?",
    "answers": [
      "Do Not Enter",
      "Railroad Advance",
      "Hospital Ahead",
      "Children at Play"
    ],
    "correct_choice": "Do Not Enter",
    "explanation": "Traffic signs that prohibit certain actions or movements are red in color and increase safety by controlling the flow of traffic through intersections. page 7",
    "image_filename": "do-not-enter.jpg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 19,
    "question": "If a traffic signal is dark because of a power outage, you should",
    "answers": [
      "Wait for a police officer to direct traffic",
      "Treat it like a yield sign",
      "Back out of the intersection and find another way around",
      "treat it like there are stop signs in all directions"
    ],
    "correct_choice": "treat it like there are stop signs in all directions",
    "explanation": "If a signal appears dark, such as during a power failure, you should stop as if there are stop signs in all directions. page 14",
    "image_filename": "traffic-signal-dead.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 20,
    "question": "When turning from one road to another",
    "answers": [
      "Swing wide to make the turn",
      "movie into the bicycle lane prior to the turn",
      "Turn into the closest lane in the direction you want to go",
      "Avoid using turn signals as they make other cars nervous"
    ],
    "correct_choice": "Turn into the closest lane in the direction you want to go",
    "explanation": "The general rule for turning is to turn from the nearest lane in the direction you are traveling to the nearest lane in the direction you want to go. Avoid swinging wide or changing lanes while turning. Page 40",
    "image_filename": "you-right.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 21,
    "question": "When you reach a roundabout you must",
    "answers": [
      "Yield, wait for a gap and merge into traffic",
      "Stop before entering then merge into traffic",
      "Honk your horn and rev your engine",
      "Accelerate to merge into traffic"
    ],
    "correct_choice": "Yield, wait for a gap and merge into traffic",
    "explanation": "Before you enter the roundabout, you must yield to traffic inside as well as exiting the roundabout. Wait for a gap and merge into traffic. Be prepared to stop if necessary. page 42",
    "image_filename": "roundabout.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 22,
    "question": "When stopped on a two-way road at a red light waiting to turn left onto a one-way, you",
    "answers": [
      "Should make three right turns to avoid turning left",
      "Must wait until the light is green",
      "Can only turn on the red light if a left turn sign is posted",
      "Can turn on the red light after yielding to other traffic"
    ],
    "correct_choice": "OptionA",
    "explanation": "Approach the turn in the traffic lane that is nearest to the direction of the turn. Turn into the nearest lane for traffic on the road you are entering. You may make this turn against a red light after stopping andyielding to traffic and pedestrians. page 39",
    "image_filename": "turn-onto-one-way.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 23,
    "question": "Work zones may have temporary speeds posted that apply",
    "answers": [
      "between the hours of 9 and 5",
      "when workers are present",
      "at all times",
      "at night"
    ],
    "correct_choice": "at all times",
    "explanation": "The temporary speed posted in a work zone applies at all times, even if workers are not visible. Traffic fines are doubled in all work zones. page 58",
    "image_filename": "construction.jpg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 24,
    "question": "When on a 4-lane road with a painted median or turn lane and a school bus is stopped with flashing red lights",
    "answers": [
      "proceed with caution, children may be present",
      "traffic in all lanes must stop",
      "traffic behind the bus must stop",
      "no traffic needs to stop"
    ],
    "correct_choice": "traffic in all lanes must stop",
    "explanation": "A painted median strip or turn lane does not create two separate roads. In this case, all lanes of traffic must stop. When the red lights flash, stop before reaching the bus and remain stopped until the driver turns off the flashing red lights. page 54",
    "image_filename": "school-bus-flashing.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 25,
    "question": "If a large vehicle swings left but has their right turn signal on and you are also turning right",
    "answers": [
      "stay beside the large vehicle on the right.",
      "wait until the large vehicle turns before you turn right.",
      "quickly turn right to avoid a collision",
      "squeeze between the large vehicle and the curb."
    ],
    "correct_choice": "wait until the large vehicle turns before you turn right.",
    "explanation": "Do not cut in between a large vehicle and the curb or shoulder. Large vehicles may need to swing wide and use more than one lane to start or finish a turn. page 53",
    "image_filename": "truck-turn.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
 {
    "id": 26,
    "question": "A person on a bicycle is riding in front of you within a travel lane. You are driving 45 mph and your lane is marked with a broken yellow center line. You",
    "answers": [
      "cannot pass the person on a bicycle at any time.",
      "should stop your car and think about your choices.",
      "can pass to the left if you leave enough distance to prevent contact with the person on the bicycle if they fall into your lane.",
      "need to roll down your window and get their attention then tell them to move out of the travel lane so you can pass safely."
    ],
    "correct_choice": "can pass to the left if you leave enough distance to prevent contact with the person on the bicycle if they fall into your lane.",
    "explanation": "At speeds greater than 35 mph, you may only pass a person on a bicycle traveling in your lane if you leave enough distance to prevent contact with the person riding a bicycle if they were to fall. page 49",
    "image_filename": "bike-pass.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 27,
    "question": "When passing a stopped streetcar or light rail train, you should",
    "answers": [
      "stop and stay stopped until the streetcar or train moves.",
      "watch for pedestrians and pass with caution.",
      "maintain speed while passing.",
      "honk your horn and proceed at 5mph."
    ],
    "correct_choice": "watch for pedestrians and pass with caution.",
    "explanation": "Use caution when passing a stopped train or streetcar. Watch for pedestrians. Passengers unloading from the train may cross in front of the train into your lane of traffic. page 64",
    "image_filename": "lightrail.webp",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 28,
    "question": "If you are required to stop at a railroad crossing and there is no stop line, you must stop at least ___ feet from the nearest",
    "answers": [
      "12",
      "15",
      "20",
      "30"
    ],
    "correct_choice": "15",
    "explanation": "When required to stop, do so at the stop line. If there is no stop line, stop at least 15 feet from the nearest rail. page 63",
    "image_filename": "railroad-crossing.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 29,
    "question": "When you parallel park, you need to be no more than ___ inches away from the curb.",
    "answers": [
      "18",
      "12",
      "10",
      "8"
    ],
    "correct_choice": "12",
    "explanation": "Park in the direction vehicles are moving in the lane. Park parallel to and no more than 12 inches from the curb. If there is no curb, park as close as possible to the edge of the shoulder. page 66",
    "image_filename": "parallel-park.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 30,
    "question": "What is the safest way to re-enter traffic from a parked position?",
    "answers": [
      "Roll down your window and yell 'here I come!' before re-entering traffic.",
      "Yield to other traffic after you signal and check your blind spots and mirrors.",
      "Check all your mirrors and signal; other traffic will yield to you.",
      "Signal, check your blind spots and pull into other traffic."
    ],
    "correct_choice": "Yield to other traffic after you signal and check your blind spots and mirrors.",
    "explanation": "When leaving a parked or stopped position, check your blind spots and mirrors, and yield to all other traffic. page 66",
    "image_filename": "parking.webp",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 31,
    "question": "It is illegal to have fog lights on when you are",
    "answers": [
      "required to dim your headlights.",
      "using them to see through fog.",
      "when you can hear a fog horn nearby",
      "using your high beam headlights."
    ],
    "correct_choice": "required to dim your headlights.",
    "explanation": "When you are required to dim your headlights, other auxiliary lights such as fog lights, must be off. page 74",
    "image_filename": "placeholder.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 32,
    "question": "A driver has three tools to use to avoid a collision.",
    "answers": [
      "Speed up, honk your horn, change lanes.",
      "Slow down, check your mirrors, stop.",
      "The three S's: Sight, Sound, and Smell.",
      "Stop quickly, turn quickly, speed up."
    ],
    "correct_choice": "Stop quickly, turn quickly, speed up.",
    "explanation": "stopping quickly, turning quickly, and speeding up. page 72",
    "image_filename": "accident.webp",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 33,
    "question": "Oregon's Open Container law",
    "answers": [
      "does not apply to people born before the year 1962.",
      "allows only passengers to have open containers.",
      "does not apply to anyone over the age of 21.",
      "requires any open bottles or containers to be in the trunk."
    ],
    "correct_choice": "requires any open bottles or containers to be in the trunk.",
    "explanation": "Oregon's Open Container law says it is illegal to have an open bottle or other container with alcohol in it while you are in a vehicle on any road. A container is considered to be open if its seal is broken, even if it has been reclosed. Any open bottles or containers should be in the trunk. page 81",
    "image_filename": "alcohol-beer-pour.webp",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 34,
    "question": "You are driving and receive a text on your cell phone. What do you do?",
    "answers": [
      "Slow down and read and respond while keeping one eye on the road.",
      "Read and respond to the text.",
      "Only answer it while driving if it is an emergency.",
      "Ignore the text until you stop in a safe parking area."
    ],
    "correct_choice": "Ignore the text until you stop in a safe parking area.",
    "explanation": "For over 18, Option D would be ok, but be warned, it is illegal for drivers under 18 years of age to use a cell phone or other mobile electronic device while operating a vehicle. Turn it off or put it in the back seat and ignore it. Over 18, a hands-free device would pass s long as it requires minimal use of hands (voice controlled). page 78",
    "image_filename": "cell-car.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 35,
    "question": "What does a yellow sign with a jumping deer mean?",
    "answers": [
      "Get our your cameras, its deer country",
      "Deer crossing, stay alert.",
      "Get out your guns! It's hunting season.",
      "Deers present at dust and dawn, turn on your headlights."
    ],
    "correct_choice": "Deer crossing, stay alert.",
    "explanation": "Deer often cross the road in this area. Be alert. Slow down if you see deer or other wildlife. page 12",
    "image_filename": "deer-crossing.jpg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
    }
    ,
  {
    "id": 36,
    "question": "How loud can you legally play your car stereo?",
    "answers": [
      "As loud as you want.",
      "The driver in the car next to you should no be able to hear you through closed windows",
      "As long as it cannot be heard 50 feet away of farther.",
      "Playing music while driving is considered distracted driving and you could be given a citation."
    ],
    "correct_choice": "As long as it cannot be heard 50 feet away of farther.",
    "explanation": "It is illegal to play a radio or other sound system so loud it can be heard 50 feet away from your vehicle. It is important to be able to hear horns, screeching tires and sirens. page 78",
    "image_filename": "car-music.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 37,
    "question": "Headphones can be worn while driving as long as",
    "answers": [
      "you keep the volume low enough to hear the conversation in your car.",
      "you should not wear headphones or anything that would impair hearing.",
      "there is someone in the car with you that can be your ears.",
      "the music is soft. and not something hard like heavy metal."
    ],
    "correct_choice": "you should not wear headphones or anything that would impair hearing.",
    "explanation": "It is important to be able to hear an approaching emergency vehicle. Do not use headphones that may reduce your hearing. page 80",
    "image_filename": "headphones.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  // {
  //   "id": 38,
  //   "question": "Sample question 38?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_38.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 39,
  //   "question": "Sample question 39?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_39.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 40,
  //   "question": "Sample question 40?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_40.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 41,
  //   "question": "Sample question 41?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_41.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 42,
  //   "question": "Sample question 42?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_42.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 43,
  //   "question": "Sample question 43?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_43.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 44,
  //   "question": "Sample question 44?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_44.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 45,
  //   "question": "Sample question 45?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "placeholder.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 46,
  //   "question": "Sample question 46?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "placeholder.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 47,
  //   "question": "Sample question 47?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "placeholder.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 48,
  //   "question": "Sample question 48?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "placeholder.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 49,
  //   "question": "Sample question 49?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_49.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // },
  // {
  //   "id": 50,
  //   "question": "Sample question 50?",
  //   "answers": [
  //     "OptionA",
  //     "OptionB",
  //     "OptionC",
  //     "OptionD"
  //   ],
  //   "correct_choice": "OptionA",
  //   "explanation": "Explanation placeholder.",
  //   "image_filename": "image_50.png",
  //   "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  // }
]


let savedState = JSON.parse(localStorage.getItem("dmvQuizState"));
let currentQuestion = savedState ? savedState.currentQuestion : 0;
let score = savedState ? savedState.score : 0;
let wrong = savedState ? savedState.wrong : 0;
let notDone = savedState ? savedState.notDone : 0;
let answersGiven = savedState ? savedState.answersGiven : {}; // store chosen answers

function saveState() {
  localStorage.setItem("dmvQuizState", JSON.stringify({ currentQuestion, score, wrong, notDone, answersGiven }));
}

function updateProgress() {
  const progress = ((currentQuestion) / (questions.length -1)) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("place").innerHTML = `
  Question ${currentQuestion} of ${questions.length -1}<br>
  Wrong: ${wrong}<br>
  Incomplete: ${notDone}` 
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("quiz").innerHTML =
      `<h2>Quiz Complete!</h2>
       <p>You got <b>${score}</b> right and <b>${wrong}</b> wrong, and ${incomplete} incomplete.</p>`;
    document.getElementById("restart").style.display = "inline-block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";
    localStorage.removeItem("dmvQuizState");
    return;
  }
  
  const q = questions[currentQuestion];
  const shuffledAnswers = [...q.answers].sort(() => Math.random() - 0.5);
  const chosen = answersGiven[q.id] || null;

  document.getElementById("quiz").innerHTML = `
    <div class="question">

    <img class="qimg" id="qimg" src="images/${q.image_filename}"><br class="break"/>
    <!-- Q${q.id}:  -->
    <h2 class="qcopy">${q.question}</h2>
    
    </div>
    <div class="answers">
      ${shuffledAnswers.map(ans => `
        <button 
          onclick="checkAnswer('${ans}')" 
          ${chosen ? "disabled" : ""} 
          style="${chosen === ans ? 'border:2px solid blue;' : ''}">
          ${ans}
        </button>`).join("")}
    </div>
    <div id="feedback"></div>
  `;

  if (chosen) {
    showFeedback(q, chosen);
  }



  document.getElementById("prevBtn").style.display = currentQuestion > 0 ? "inline-block" : "none";
  document.getElementById("nextBtn").style.display = currentQuestion < questions.length - 1 ? "inline-block" : "none";

  updateProgress();
}
// need to figure out how to check for nothing selected when the mouse button is clicked for next of previous.
function checkAnswer(choice) {
  const q = questions[currentQuestion];
  if (!answersGiven[q.id]) {
    answersGiven[q.id] = choice;
    if (choice === q.correct_choice) {
      score++;
    } else { 
      wrong++;
    }
    saveState();
  }
  showFeedback(q, choice);
}

function showFeedback(q, choice) {
  let feedbackDiv = document.getElementById("feedback");
  if (choice === q.correct_choice) {
    feedbackDiv.innerHTML = `<div class="feedback correct">
    <h3>✅ Correct!</h3>
    <p>${q.explanation}</p>
    </div>`;
  } else {
    feedbackDiv.innerHTML = `<div class="feedback wrong">
    <h3>❌ Wrong. You chose:</h3>
    <p><b>${choice}</b></p>
    <h3>Correct answer:</h3>
    <p><b>${q.correct_choice}</b></p>
    <p><b>Explanation</b> ${q.explanation}</p>
    </div>`;
  }
}

document.getElementById("nextBtn").onclick = () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    saveState();
    showQuestion();
  }
};

document.getElementById("prevBtn").onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    saveState();
    showQuestion();

  }
};

document.getElementById("restart").onclick = () => {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  notDone = 0;
  answersGiven = {};
  localStorage.removeItem("dmvQuizState");
  document.getElementById("restart").style.display = "none";
  showQuestion();
};

showQuestion();