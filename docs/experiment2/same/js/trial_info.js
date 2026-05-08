var trial_info = [
    {
        name: "Melvin",
        image: "characters/Melvin.png",
        story: `<p>
            &emsp;&emsp;
            Melvin is a 45-year-old White male farmer who profitably grows corn and hay.
            He has a cheerful personality, but can be stingy sometimes.
            He has high blood pressure and enjoys listening to rock music.
            <br> &emsp;&emsp;
            Melvin's neighbor, Vincent, has his own farm growing corn and hay.
            Farmers are often concerned with keeping their hay dry.
            Moist hay is more likely to catch fire, and hayfires are a big risk to crops.
            Vincent recently bought a very expensive piece of hay-drying equipment to
            reduce the risk of hayfires on his farm.
            Melvin considered buying the same equipment, but after evaluating the
            conditions and meeting with consultants, he judged the risk of a hayfire on
            his farm to be very low and decided not to buy the equipment.
            <br> &emsp;&emsp;
            Melvin's hay is stored in a barn near the border between the two farms.
            One day, some moist hay in Melvin's barn caught on fire. The fire spread to
            Vincent's property, badly damaging Vincent's crops.
            </p>`,
        "attention_check": "Melvin and Vincent are apartment neighbors in a large city.<br><br>",
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 45 years old", "is 45 years old", "been 45 years old"],
                ["being White", "is White", "been White"],
                ["being a farmer", "is a farmer", "been a farmer"],
                ["having high blood pressure", "has high blood pressure", "had high blood pressure"],
                ["having a cheerful personality", "has a cheerful personality", "had a cheerful personality"],
                ["being stingy sometimes", "can be stingy sometimes", "been stingy sometimes"],
                ["enjoying listening to rock music", "enjoys listening to rock music", "enjoyed listening to rock music"],
                ["growing corn", "grows corn", "grown corn"],
                ["growing hay", "grows hay", "grown hay"]
            ],
            actions: [
                ["building his barn near the border with Vincent\'s property", "built his barn near the border with Vincent\'s property", "built their barn near the border with Vincent\'s property"],
                ["being concerned with hayfires", "was concerned with hayfires", "been concerned with hayfires"],
                ["considering buying hay-drying equipment", "considered buying hay-drying equipment", "considered buying hay-drying equipment"],
                ["meeting with consultants", "met with consultants", "met with consultants"],
                ["deciding not to buy hay-drying equipment", "decided not to buy hay-drying equipment", "decided not to buy hay-drying equipment"]
            ]
        },
        outcome: "the fire",
    },

    {
        name: "Chris",
        image: "characters/Chris.png",
        story: `<p>
            &emsp;&emsp;
            Chris is a 10-year-old White boy who weighs 70 lbs and has an average IQ.
            He has a curious personality, enjoys playing hide-and-seek as well as
            swimming, and is a picky eater.
            <br> &emsp;&emsp;
            Chris admires his father a lot.
            His father is an avid recreational deer hunter who owns several hunting guns.
            All of the guns are kept in a locked cabinet, and Chris\' father usually
            keeps the key on himself.
            <br> &emsp;&emsp;
            One day, Chris was playing hide-and-seek with friends at home and hid in
            the hall closet. There, he found the key to the gun cabinet in his father\'s
            jacket, which was hanging in the closet.
            Chris curiously opened the cabinet and began playing with one of the pistols.
            As he was holding the pistol, he accidentally discharged it and shot one of his friends
            in the shoulder. The friend was taken to the hospital for treatment of severe wounds.
            </p>`,
        "attention_check": "Chris found a wallet in his father\'s jacket.<br><br>",
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 10 years old", "is 10 years old", "been 10 years old"],
                ["being White", "is White", "been White"],
                ["weighing 70 lbs", "weighs 70 lbs", "weighed 70 lbs"],
                ["having an average IQ", "has an average IQ", "had an average IQ"],
                ["enjoying playing hide-and-seek", "enjoys playing hide-and-seek", "enjoyed playing hide-and-seek"],
                ["enjoying swimming", "enjoys swimming", "enjoyed swimming"],
                ["admiring his father", "admires his father", "admired his father"],
                ["having a curious personality", "has a curious personality", "had a curious personality"],
                ["being a picky eater", "is a picky eater", "been a picky eater"]
            ],
            actions: [
                ["inviting friends over to play", "invited friends over to play", "invited friends over to play"],
                ["hiding in the hall closet", "hid in the hall closet", "hid in the hall closet"],
                ["finding the key in his father\'s jacket pocket", "found the key in his father\'s jacket pocket", "found the key in their father\'s jacket pocket"],
                ["opening the gun cabinet with the key", "opened the gun cabinet with the key", "opened the gun cabinet with the key"],
                ["picking up a pistol to play with", "picked up a pistol to play with", "picked up a pistol to play with"]
            ]
        },
        outcome: "his friend's wounds",
    },

    {
        name: "Darla",
        image: "characters/Darla.png",
        story: `<p>
            &emsp;&emsp;
            Darla is a 32-year-old Black woman who runs a daycare business from her home.
            She communicates and interacts well with children, and has a laid-back but
            absent-minded personality.
            She enjoys cooking at home and wears glasses because she is nearsighted.
            <br> &emsp;&emsp;
            The area where Darla lives has high rates of tornadoes, so her house has
            a windowless interior room to shelter in case of emergencies.
            Pamela is one of Darla\'s clients.
            Darla has worked with her for many years, and she has always been satisfied
            with Darla\'s care for her daughter, Patty.
            <br> &emsp;&emsp;
            One day, Darla was playing games with loud upbeat music with the children,
            including Patty. Suddenly, tornado sirens began going off.
            A small but rapidly moving storm cell had just spawned a tornado at the edge,
            of town, heading towards her house.
            Darla didn\'t hear the sirens because she was focused on the children.
            A few minutes later, the tornado hit her home, shattering one of her windows.
            A piece of glass from the broken window cut Patty\'s face.
            Patty was taken to the hospital to treat the cut.
            </p>`,
        "attention_check": "Darla has been taking care of Pamela\'s daughter, Patty, for years.<br><br>",
        features: {
            non_actions: [
                ["being female", "is female", "been female"],
                ["being 32 years old", "is 32 years old", "been 32 years old"],
                ["being Black", "is Black", "been Black"],
                ["running a home daycare business", "runs a home daycare business", "ran a home daycare business"],
                ["being nearsighted", "is nearsighted", "been nearsighted"],
                ["enjoying cooking", "enjoys cooking", "enjoyed cooking"],
                ["having a laid-back personality", "has a laid-back personality", "had a laid-back personality"],
                ["having an absent-minded personality", "has an absent-minded personality", "had an absent-minded personality"],
                ["communicating and interacting well with children", "communicates and interacts well with children", "communicated and interacted well with children"],
                ["working with Pamela for many years", "has worked with Pamela for many years", "worked with Pamela for many years"]
            ],
            actions: [
                ["living in a tornado-affected area", "lives in a tornado-affected area", "lived in a tornado-affected area"],
                ["playing games with the children", "played games with the children", "played games with the children"],
                ["playing loud upbeat music with the children", "played loud upbeat music the the children", "played loud upbeat music with the children"],
                ["focusing on the children", "focused on the children", "focused on the children"],
                ["not hearing the tornado sirens", "did not hear the tornado sirens", "not heard the tornado sirens"]
            ]
        },
        outcome: "Patty\'s cut",
    },

    {
        name: "Ava",
        image: "characters/Ava.png",
        story: `<p>
            &emsp;&emsp;
            Ava is a famous 26-year-old Native American female artist who lives in the valley.
            She is allergic to peanuts, regularly drinks coffee, and enjoys going to music concerts.
            <br> &emsp;&emsp;
            Ava is a compassionate person.
            Her neighbor, Peter, is 81 years old and no longer drives.
            The two of them have been friends for many years, and Ava often drives Peter
            to appointments and errands.
            <br> &emsp;&emsp;
            One day, Ava was driving Peter to a physical therapy appointment.
            Peter rested in the passenger seat as Ava drove along the highway,
            obeying the 70 mile-per-hour speed limit.
            Suddenly, a deer darted out onto the highway in front of the car.
            Ava was momentarily startled and slammed the brakes.
            Unfortunately, the car did not stop in time.
            It hit the deer, and the injured deer manically jumped onto the windshield,
            shattering it and causing Peter significant injury.
            </p>`,
        "attention_check": "Ava was speeding at the time of the accident.<br><br>",
        features: {
            non_actions: [
                ["being female", "is female", "been female"],
                ["being 26 years old", "is 26 years old", "been 26 years old"],
                ["being Native American", "is Native American", "been Native American"],
                ["being an artist", "is an artist", "been an artist"],
                ["having a peanut allergy", "has a peanut allergy", "had a peanut allergy"],
                ["regularly drinking coffee", "regularly drinks coffee", "regularly drank coffee"],
                ["being a compassionate person", "is a compassionate person", "been a compassionate person"],
                ["being friends with Peter for many years", "has been friends with Peter for many years", "been friends with Peter for many years"],
                ["often driving Peter to appointments and errands", "often drives Peter to appointments and errands", "often driven Peter to appointments and errands"],
                ["enjoying going to music concerts", "enjoys going to music concerts", "enjoyed going to music concerts"]
            ],
            actions: [
                ["doing her annual car maintenance", "did her annual car maintenance", "done their annual car maintenance"],
                ["driving under the speed limit", "drove under the speed limit", "driven under the speed limit"],
                ["listening to the radio while driving", "listened to the radio while driving", "listened to the radio while driving"],
                ["being startled by the deer", "was startled by the deer", "been startled by the deer"],
                ["slamming the brakes after seeing the deer", "slammed the brakes after seeing the deer", "slammed the brakes after seeing the deer"]
            ]
        },
        outcome: "Peter\'s injury",
    },

    {
        name: "Julia",
        image: "characters/Julia.png",
        story: `<p>
            &emsp;&emsp;
            Julia is a 19-year-old multiracial woman who babysits on the weekends to
            earn some extra money while attending college, where she studies psychology.
            She has asthma, enjoys watching TV shows, and is courteous but can be
            sensitive sometimes.
            <br> &emsp;&emsp;
            One Saturday night, Julia was babysitting Mr. and Mrs. Jackson\'s 3-year-old son, Benji.
            After feeding Benji dinner, she read children\'s books with him and then
            started preparing a bath before bed.
            She was filling the bathtub when her phone rang.
            <br> &emsp;&emsp;
            The call was from her partner. Julia picked up and told him she couldn\'t talk
            in the moment, but he tearfully blurted out that he had cheated on her.
            She left the bathroom to talk to him, said that she needed to go after a few minutes,
            and then sat for a few minutes after hanging up.
            Julia then went to get Benji for his bath, but discovered that he had climbed
            into the bathtub himself and was floating unconscious.
            She immediately pulled him out and called 911.
            Benji was resuscitated but remains in critical condition.
            </p>`,
        "attention_check": "Julia\'s phone rang while she was filling the bathtub.<br><br>",
        features: {
            non_actions: [
                ["being female", "is female", "been female"],
                ["being 19 years old", "is 19 years old", "been 19 years old"],
                ["being multiracial", "is multiracial", "been multiracial"],
                ["being a college student", "is a college student", "been a college student"],
                ["having asthma", "has asthma", "had asthma"],
                ["studying psychology", "studies psychology", "studied psychology"],
                ["babysitting on the weekends", "babysits on the weekends", "babysat on the weekends"],
                ["being sensitive sometimes", "can be sensitive sometimes", "been sensitive sometimes"],
                ["being a courteous person", "is a courteous person", "been a courteous person"],
                ["enjoying watching TV shows", "enjoys watching TV shows", "enjoyed watching TV shows"]
            ],
            actions: [
                ["reading children\'s books with Benji", "read children\'s books with Benji", "read children\'s books with Benji"],
                ["picking up her partner\'s call while filling the bathtub", "picked up her partner\'s call while filling the bathtub", "picked up their partner\'s call while filling the bathtub"],
                ["feeling hurt after learning about the cheating", "felt hurt after learning about the cheating", "felt hurt after learning about the cheating"],
                ["leaving the bathroom to talk to her partner", "left the bathroom to talk to her partner", "left the bathroom to talk to their partner"],
                ["sitting for a few minutes after hanging up", "sat for a few minutes after hanging up", "sat for a few minutes after hanging up"]
            ]
        },
        outcome: "Benji\'s accident",
    },

    {
        name: "Alfred",
        image: "characters/Alfred.png",
        story: `<p>
            &emsp;&emsp;
            Alfred is a 68-year-old White male veteran who was honorably discharged
            and now lives alone in a quaint neighborhood in a large city.
            He has been diagnosed with Post-Traumatic Stress Disorder (PTSD), a mental
            health condition that can cause vivid flashbacks of a traumatic event.
            Alfred enjoys fishing, Italian cuisine, and has a calm personality.
            <br> &emsp;&emsp;
            One evening, Alfred was riding the subway home after visiting a friend
            in a different neighborhood. Oliver, an investment banker,
            was leaving work and boarded the same subway a few stops later.
            Both people were quiet and did not interact with other passengers.
            <br> &emsp;&emsp;
            Alfred and Oliver got off at the same stop, which was underground.
            There was new road construction happening above the stop.
            As Alfred stepped onto the subway platform, he heard loud drilling and
            yelling above him. He panicked and suddenly physically attacked Oliver,
            pinning him to the ground and punching him twice.
            </p>`,
        "attention_check": "Alfred and Oliver got off the subway at different stops.<br><br>",
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 68 years old", "is 68 years old", "been 68 years old"],
                ["being White", "is White", "been White"],
                ["being a veteran", "is a veteran", "been a veteran"],
                ["having PTSD", "has PTSD", "had PTSD"],
                ["enjoying fishing", "enjoys fishing", "enjoyed fishing"],
                ["enjoying Italian cuisine", "enjoys Italian cuisine", "enjoyed Italian cuisine"],
                ["having a calm personality", "has a calm personality", "had a calm personality"],
                ["being patriotic", "is patriotic", "been patriotic"],
                ["living alone", "lives alone", "lived alone"]
            ],
            actions: [
                ["taking the subway home", "took the subway home", "taken the subway home"],
                ["being quiet on the subway", "was quiet on the subway", "been quiet on the subway"],
                ["getting off at the same stop as Oliver", "got off at the same stop as Oliver", "gotten off at the same stop as Oliver"],
                ["hearing loud drilling and yelling from the construction above", "heard loud drilling and yelling from the construction above", "heard loud drilling and yelling from the construction above"],
                ["physically attacking Oliver", "physically attacked Oliver", "physically attacked Oliver"]
            ]
        },
        outcome: "Oliver\'s injury",
    },

    {
        name: "Qian",
        image: "characters/Qian.png",
        story: `<p>
            &emsp;&emsp;
            Qian is a 27-year-old Asian male waitor in a small town.
            He is hard-working and has a humorous personality, but can be stubborn sometimes.
            He enjoys watching sports, listening to jazz music, and does not smoke.
            <br> &emsp;&emsp;
            One Friday night, Qian was hanging out at the local bar with some cousins
            who were visiting from out of town.
            They had several rounds of drinks over the course of two hours.
            Wilson, a car mechanic who lives and works in the same small town,
            was also at the bar that night and had been there for about an hour.
            He approached Qian\'s party and began saying racial slurs to them.
            He playfully punched Qian while continuing to make derogatory comments.
            Qian suddenly got up and violently pushed Wilson, knocking him to the ground
            and causing him serious injury.
            </p>`,
        "attention_check": "Qian was hanging out at the local bar.<br><br>",
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 27 years old", "is 27 years old", "been 27 years old"],
                ["being Asian", "is Asian", "been Asian"],
                ["being a restaurant waiter", "is a restaurant waiter", "been a restaurant waiter"],
                ["not smoking", "does not smoke", "not smoked"],
                ["enjoying watching sports", "enjoys watching sports", "enjoyed watching sports"],
                ["enjoying jazz music", "enjoys jazz music", "enjoyed jazz music"],
                ["having a humorous personality", "has a humorous personality", "had a humorous personality"],
                ["being stubborn sometimes", "can be stubborn sometimes", "been stubborn sometimes"],
                ["being hard-working", "is hard-working", "been hard-working"]
            ],
            actions: [
                ["hanging out at the local bar with cousins", "hung out at the local bar with cousins", "hung out at the local bar with cousins"],
                ["having several drinks over the course of two hours", "had several drinks over the course of two hours", "had several drinks over the course of two hours"],
                ["being angered by Wilson\'s comments", "was angered by Wilson\'s comments", "been angered by Wilson\'s comments"],
                ["not talking back to Wilson", "did not talk back to Wilson", "not talked back to Wilson"],
                ["pushing Wilson to the ground", "pushed Wilson to the ground", "pushed Wilson to the ground"]
            ]
        },
        outcome: "Wilson\'s injury",
    },

    {
        name: "Edward",
        image: "characters/Edward.png",
        story: `<p>
            &emsp;&emsp;
            Edward is a 24-year-old, single White man working as a clinical
            research assistant at a large hospital. He is a studious and ambitious person,
            and enjoys reading science fiction and browsing Twitter.
            He is also an experienced driver.
            <br> &emsp;&emsp;
            Edward recently applied to medical schools and was told his admission results
            would be sent via text. On the day that results were scheduled to be released,
            Edward was driving when he got the notification for a text on his phone.
            <br> &emsp;&emsp;
            Unfortunately, there was no place to pull off the road,
            but Edward was very anxious about his medical school admission results.
            He checked that there were no other cars nearby and then decided to take
            a quick peek at the text. As he was looking at it,
            his car veered towards the edge of the road and sideswiped a cyclist.
            The cyclist was thrown off his bike.
            </p>`,
        "attention_check": "Edward pulled his car off the road to check his phone.<br><br>",
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 24 years old", "is 24 years old", "been 24 years old"],
                ["being White", "is White", "been White"],
                ["being a clinical research assistant", "is a clinical research assistant", "been a clinical research assistant"],
                ["being single", "is single", "been single"],
                ["enjoying browsing Twitter", "enjoys browsing Twitter", "enjoyed browsing Twitter"],
                ["enjoying reading science fiction", "enjoys reading science fiction", "enjoyed reading science fiction"],
                ["being an ambitious person", "is an ambitious person", "been an ambitious person"],
                ["being a studious person", "is a studious person", "been a studious person"],
                ["being an experienced driver", "is an experienced driver", "been an experienced driver"]
            ],
            actions: [
                ["not muting phone notifications while driving", "did not mute phone notifications while driving", "not muted phone notifications while driving"],
                ["not speeding", "was not speeding", "not sped"],
                ["checking that there were no other cars nearby", "checked that there were no other cars nearby", "checked that there were no other cars nearby"],
                ["taking a peek at the text", "took a peek at the text", "taken a peek at the text "],
                ["veering into the cyclist while reading the text", "veered into the cyclist while reading the text", "veered into the cyclist while reading the text"]
            ]
        },
        outcome: "the cyclist's fall",
    },

    {
        name: "Nadia",
        image: "characters/Nadia.png",
        story: `<p>
            &emsp;&emsp;
            Nadia is a 34-year-old White woman who works as a software engineer.
            She has red hair, and is a timid but organized person.
            She enjoys collecting vinyl records and oil painting.
            <br> &emsp;&emsp;
            Nadia and her husband Franklin have been married for five years.
            Two years ago, Franklin spent four months in jail for physically abusing her.
            After that, they started going to couples therapy and for a while their
            relationship improved.
            <br> &emsp;&emsp;
            Recently, however, Franklin has been acting more violent towards Nadia when drunk,
            and on one occasion she went to the emergency room for bruises she suffered.
            One night, Franklin came home in an extremely intoxicated state and began
            screaming at Nadia that he was going to kill her someday.
            Nadia became very scared and ran into their bedroom to hide.
            Franklin followed her and started hitting her.
            Out of panic, she grabbed the loaded, licensed revolver that he kept under the
            bed and shot him. Franklin died in the hospital three hours later.
            </p>`,
        "attention_check": "Nadia previously suffered physical abuse in her marriage.<br><br>",
        features: {
            non_actions: [
                ["being female", "is female", "been female"],
                ["being 34 years old", "is 34 years old", "been 34 years old"],
                ["being White", "is White", "been White"],
                ["having red hair", "has red hair", "had red hair"],
                ["being a software engineer", "is a software engineer", "been a software engineer"],
                ["collecting vinyl records", "collects vinyl records", "collected vinyl records"],
                ["enjoying oil painting", "enjoys oil painting", "enjoyed oil painting"],
                ["being a timid person", "is a timid person", "been a timid person"],
                ["being an organized person", "is an organized person", "been an organized person"],
                ["attending couples therapy years ago", "attended couples therapy years ago", "attended couples therapy years ago"]
            ],
            actions: [
                ["going to the emergency room for bruises", "went to the emergency room for bruises", "gone to the emergency room for bruises"],
                ["not seeking help after the emergency room incident", "did not seek help after the emergency room incident", "not sought help after the emergency room incident"],
                ["being scared when Franklin screamed", "was scared when Frankin screamed", "been scared when Frankin screamed"],
                ["grabbing the revolver", "grabbed the revolver", "grabbed the revolver"],
                ["shooting Franklin with the revolver", "shot Franklin with the revolver", "shot Franklin with the revolver"]
            ]
        },
        outcome: "Frankin\'s death",
    },


    {
        name: "Tristan",
        image: "characters/Tristan.png",
        story: `<p>
            &emsp;&emsp;
            Tristan is a 43-year-old Black male cardiologist who has worked for over
            ten years at a large city hospital. He is extroverted and outgoing,
            but can be impatient and opinionated sometimes.
            He is Christian and enjoys listen to country music.
            <br> &emsp;&emsp;
            Tristan was consulted about a patient, Annie, who had recently been having chest pains.
            Annie was a middle-aged woman and had been previously diagnosed with anxiety,
            for which she regularly went to therapy. She reported that, in addition to
            chest pains, she had been feeling nauseous and was having trouble sleeping lately.
            After reviewing her symptoms and medical history, Tristan checked her
            vitals and ordered an electrocardiogram (ECG/EKG), which showed no abnormalities.
            Tristan concluded that Annie\'s symptoms may have been caused by anxiety attacks.
            He recommended that she check in with her psychiatrist.
            <br> &emsp;&emsp;
            However, it turned out that Annie had coronary heart disease.
            A few days later, she suffered a heart attack at home and died.
            </p>`,
        "attention_check": "It turned out that Annie had lung cancer, and died in the hospital a few months later.<br><br>",
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 43 years old", "is 43 years old", "been 43 years old"],
                ["being Black", "is Black", "been Black"],
                ["being a cardiologist", "is a cardiologist", "been a cardiologist"],
                ["being Christian", "is Christian", "been Christian"],
                ["enjoying listening to country music", "enjoys listening to country music", "enjoyed listening to country music"],
                ["being extroverted and outgoing", "is extroverted and outgoing", "been extroverted and outgoing"],
                ["being opinionated sometimes", "can be opinionated sometimes", "been opinionated sometimes"],
                ["being impatient sometimes", "can be impatient sometimes", "been impatient sometimes"],
                ["having worked for over ten years at the same hospital", "has worked for ten years at the same hospital", "worked for over ten years at the same hospital"]
            ],
            actions: [
                ["reviewing Annie\'s medical history and symptoms", "reviewed Annie\'s medical history and symptoms", "reviewed Annie\'s medical history and symptoms"],
                ["checking Annie\'s vitals", "checked Annie\'s vitals", "checked Annie\'s vitals"],
                ["ordering Annie an electrocardiogram (ECG/EKG)", "ordered Annie an electrocardiogram (ECG/EKG)", "ordered Annie an electrocardiogram (ECG/EKG)"],
                ["not ordering any other heart tests", "did not order any other heart tests", "not ordered any other heart tests"],
                ["not ordering a mammogram", "did not order a mammogram", "not ordered a mammogram"]
            ]
        },
        outcome: "Annie\'s death",
    },

    {
        name: "Flora",
        image: "characters/Flora.png",
        story: `<p>
            Flora is a 32-year-old Asian woman who is legally blind and uses a
            white cane to guide herself around potential obstacles in her path.
            She is an empathetic person and works as a counselor.
            In her free time, Flora enjoys gardening and composing music.
            She is also an early riser.
            <br> &emsp;&emsp;
            One night, Flora was over at a neighbor\'s house for dinner.
            Paul was walking through the neighborhood on his way home from the bar.
            Near Flora\'s house, he noticed a wallet sitting in a bush next to the sidewalk.
            He bent over to pick it up, but lost his balance and fell.
            He was so drunk that he passed out on the sidewalk.
            <br> &emsp;&emsp;
            Soon after, Flora was walking home.
            It was a short walk and Flora was using her white cane. As she approached Paul,
            she heard loud snoring and realized someone was lying on the sidewalk.
            Flora wanted to help Paul and tried to make her way around him using her white cane,
            but her cane slipped between his legs.
            She took a step forward and accidentally stepped on his torso, injuring his back.
            </p>`,
        "attention_check": "Flora's neighbor drove her home after dinner.<br><br>",
        features: {
            non_actions: [
                ["being female", "is female", "been female"],
                ["being 32 years old", "is 32 years old", "been 32 years old"],
                ["being Asian", "is Asian", "been Asian"],
                ["being a counselor", "is a counselor", "been a counselor"],
                ["being legally blind", "is legally blind", "been legally blind"],
                ["enjoying gardening", "enjoys gardening", "enjoyed gardening"],
                ["being an empathetic person", "is an empathetic person", "been an empathetic person"],
                ["composing music in her free time", "composes music in her free time", "composed music in their free time"],
                ["being an early riser", "is an early riser", "been an early riser"],
                ["using a white cane to guide herself", "uses a white cane to guide herself", "used a white cane to guide themselves"]
            ],
            actions: [
                ["going to a neighbor\'s house for dinner", "went to a neighbor\'s house for dinner", "gone to a neighbor\'s house for dinner"],
                ["using her white cane while walking home", "used her white cane while walking home", "used their white cane while walking home"],
                ["not calling for help", "did not call for help", "not called for help"],
                ["her white cane slipping between Paul\'s legs", "her white cane slipped between Paul\'s legs", "had their white cane slip between Paul\'s legs"],
                ["stepping on Paul\'s torso", "stepped on Paul\'s torso", "stepped on Paul\'s torso"]
            ]
        },
        outcome: "Paul\'s injury",
    }
];

