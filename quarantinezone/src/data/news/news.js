export const news = [
  {
    id: 1,
    title: "Quarantine Zone Discord Text Q&A #6 - Developer Insights",
    description: "The developers answer community questions about game development, features, and future plans. Learn about cut features, endless mode, and more!",
    tags: ["Q&A", "Developer", "Community", "Updates"],
    publishDate: "2025-12-05",
    imageUrl: "/images/news/news01.webp",
    imageAlt: "Quarantine Zone Discord Q&A session with developers.",
    isHome: false,
    seo: {
      title: "Quarantine Zone Discord Q&A #6 - Developer Insights & Game Updates",
      description: "Read the latest Discord Q&A with Quarantine Zone developers. Learn about game development challenges, cut features, endless mode, and future content updates.",
      keywords: "Quarantine Zone Q&A, Discord Q&A, game development, developer insights, endless mode, game features, Brigada Games"
    },
    addressBar: "discord-qa-6",
    detailsHtml: `
    <p>The developers of <strong>Quarantine Zone: The Last Check</strong> recently held their sixth Discord text Q&A session, answering community questions about the game's development, features, and future plans. Here are the highlights from the session. For comprehensive guides on game mechanics mentioned in this Q&A, visit our <a href="/guides" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">guides section</a>.</p>

    <h2><strong>Development Challenges</strong></h2>

    <p><strong>Q: What was the best and worst part of making the game?</strong></p>
    <p><strong>A:</strong> Sudden popularity is a good answer for both sides. It's really cool to know that a lot of people like our demo, but we put so much pressure on ourselves that we definitely overcomplicated and overthought some things a few times after it.</p>

    <p><strong>Q: What was your first thought when you decided to make QZ?</strong></p>
    <p><strong>A:</strong> It was actually an idea from our Programmer, and the first thought was "that sounds cool".</p>

    <h2><strong>Game Modes & Difficulty</strong></h2>

    <p><strong>Q: Will there be different difficulties for the endless game mode? Like less symptoms being visible or measurable?</strong></p>
    <p><strong>A:</strong> Not on release (the main focus would be on the campaign). But we want to focus some of our content updates on the endless mode, and then who knows what we will come up with. Learn about inspection tools and symptom detection in our <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">wiki</a>.</p>

    <h2><strong>Cut Features & Future Content</strong></h2>

    <p><strong>Q: Are there features that you wanted to include but couldn't for some reason? Are there plans for a DLC later on with more content?</strong></p>
    <p><strong>A:</strong> We tried to implement some kind of morale system that included different events and affected the overall mood of survivors in the camp (survivors could throw trash at you and even become hostile and attack you). It was cool on paper, but the prototypes were too complicated, and it required so much additional work to support it that we decided to cut it.</p>

    <h2><strong>Gameplay Mechanics</strong></h2>

    <p><strong>Q: Can we wear gloves or a hazmat suit when examining things? Cause we might accidentally touch zombie blood when doing examinations or taking contraband</strong></p>
    <p><strong>A:</strong> That smart talk is for scientists, but commanders prefer using guns as a defensive measure.</p>

    <p><strong>Q: Will there also be Guard dogs like in the Logo Image?</strong></p>
    <p><strong>A:</strong> We actually thought about including guard dogs as some kind of "1 extra life" upgrade. The dog would kill the infected that you missed in camp, but would die from contact with infected blood. We even thought about giving an achievement for keeping your starting dog alive until the end of the game, but it was very late in development, and we didn't have time to think about it more and implement it. Maybe it will evolve into something in content updates.</p>

    <p><strong>Q: Are each person's symptoms randomized or are they all pre-programmed symptoms?</strong></p>
    <p><strong>A:</strong> Some survivors are preconfigured, like the ones that teach you about new tools or have some references/story building behind them, but most of them are randomized with some kind of logic based on game progression. Master inspection techniques with our <a href="/guides" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">inspection guides</a>.</p>

    <h2><strong>Weapons & Combat</strong></h2>

    <p><strong>Q: Will there be more variety of weapons in the future or maybe some melee ones?</strong></p>
    <p><strong>A:</strong> We want to add at least more ranged weapons in content updates after release. As a fun story - last week, one of our developers tested killing rats with the hammer and could not get even one, so melee combat is definitely not our strong suit right now lol.</p>

    <h2><strong>Future Modes & Features</strong></h2>

    <p><strong>Q: Will there be an infected commander mode where we can take down the base city by sending infected filled convoys?</strong></p>
    <p><strong>A:</strong> Right after Half-Life 4.</p>

    <h2><strong>Development Lessons</strong></h2>

    <p><strong>Q: Did you learn a lot from the playtesters? What was the most common thing you came across? And what is the biggest thing you had/are needing to change because of it?</strong></p>
    <p><strong>A:</strong> The biggest lesson was "logic behind the scenes doesn't matter if the player does not have a clue about it". We iterated on many mechanics after playtests (laboratory, wink wink), and are actually doing it right now.</p>

    <h2><strong>Pets & Achievements</strong></h2>

    <p><strong>Q: Will we be able to adopt many different breeds of cats and dogs?</strong></p>
    <p><strong>A:</strong> Definitely not many and not on release, but ideas about pets sometimes come up in discussions (but in a very "maybe later" manner), so maybe later in content updates.</p>

    <h2><strong>Bugs & Technical Issues</strong></h2>

    <p><strong>Q: If you are able to talk about it, what has been the hardest bug to squash so far?</strong></p>
    <p><strong>A:</strong> This one took A LOT of time: sometimes, during inspections, our pistol just stopped working. It took a whole two weeks to find out that the flying helicopter above the checkpoint somehow blocked our ability to send bullets towards the survivors. Our QA was partially insane at this point.</p>

    <h2><strong>Game Items & Progression</strong></h2>

    <p><strong>Q: Will there be a way to buy more of the infection tests (the ones in the demo that just work every time) in the full game? Or will they be locked behind doing certain tasks? Or will we not be able to get any more at all?</strong></p>
    <p><strong>A:</strong> There will be certain different ways to acquire syringes.</p>

    <h2><strong>Endless Mode & Leaderboards</strong></h2>

    <p><strong>Q: Will there be a leaderboard for endless mode? Like best ranked base, longest days, who's killed the most amount of zombies? Something like that</strong></p>
    <p><strong>A:</strong> Not in our plans for the near future. Our mechanics are just not made with a competitive side in mind, and do not really make a fun leaderboard experience.</p>

    <p>Stay tuned for more developer Q&A sessions and updates on Quarantine Zone: The Last Check!</p>
    `
  },
  {
    id: 2,
    title: "Quarantine Zone Discord Text Q&A #5 - Development Progress & Game Features",
    description: "The developers discuss the game's origin, development progress, story mode, save mechanics, and answer community questions about gameplay features and future content.",
    tags: ["Q&A", "Developer", "Community", "Game Features"],
    publishDate: "2025-12-05",
    imageUrl: "/images/news/news01.webp",
    imageAlt: "Quarantine Zone Discord Q&A #5 session with developers.",
    isHome: false,
    seo: {
      title: "Quarantine Zone Discord Q&A #5 - Development Progress & Game Features",
      description: "Read the fifth Discord Q&A with Quarantine Zone developers. Learn about development progress, story mode, save mechanics, character customization, and gameplay features.",
      keywords: "Quarantine Zone Q&A, Discord Q&A #5, development progress, story mode, save mechanics, game features, character customization, Brigada Games"
    },
    addressBar: "discord-qa-5",
    detailsHtml: `
    <p>The developers of <strong>Quarantine Zone: The Last Check</strong> recently held their fifth Discord text Q&A session, sharing insights about the game's development progress, story mode, and answering community questions about various gameplay features. Stay updated with all game news and updates on our <a href="/news" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">news page</a>.</p>

    <h2><strong>Game Origin & Development</strong></h2>

    <p><strong>Q: What was the reason this game was made in the first place?</strong></p>
    <p><strong>A:</strong> The game began with a simple but unique idea inside our team - focusing on inspection and tough, consequential decisions rather than typical zombie action. It felt fresh and unexplored, so we built the entire project around that core concept. Learn more about the game's core mechanics on our <a href="/" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">homepage</a>.</p>

    <p><strong>Q: At what percentage are you guys at now with the overall game to release timeline?</strong></p>
    <p><strong>A:</strong> Most of the release mechanics are ready, we're polishing and bugfixing at the moment.</p>

    <p><strong>Q: How are you guys feeling with the upcoming release? Are you happy with where you're at?</strong></p>
    <p><strong>A:</strong> Obviously! There's a lot of concerns and cool features that we want to add to the game, so I can't say it's easy at this point, but hell yeah! QZ is almost out baby!</p>

    <h2><strong>Inspiration & Similar Games</strong></h2>

    <p><strong>Q: What's your opinion on games that copy the mechanics, but not the models or scripts, of Quarantine Zone? Also, was Quarantine Zone the original idea, or were you inspired by something else?</strong></p>
    <p><strong>A:</strong> The concept itself originated inside our team. One of our developers pitched the initial idea, and it immediately felt fresh and workable. We were genuinely surprised no one had explored this angle before - it clicked instantly and opened the door to the systems we're building today.</p>
    <p>We see it the same way many creative fields do - when an idea resonates, it naturally inspires variations. As long as teams aren't lifting our assets or code, exploring similar themes or mechanics is completely fair. In fact, it usually means the core concept is strong and recognisable, which we take as a positive sign.</p>

    <h2><strong>Future Content & Sequels</strong></h2>

    <p><strong>Q: Will there be Quarantine Zone 2?</strong></p>
    <p><strong>A:</strong> That is too early to tell, but that being said, we plan to support Quarantine Zone with content after its release.</p>

    <h2><strong>Gameplay Mechanics</strong></h2>

    <p><strong>Q: Why did you decide to scrap the cart? Were there many people who didn't like it, or was it simply a gameplay decision?</strong></p>
    <p><strong>A:</strong> We didn't remove it completely, the cart is still used in one of the features. We just decided to reduce how often players have to interact with it.</p>

    <p><strong>Q: Would you guys consider a rare event where a zombie could break the containment glass if left in the quarantine zone for too long?</strong></p>
    <p><strong>A:</strong> Post the idea in game suggestions in our Discord server. Our game designer love to watch your ideas and some of them are already in the roadmap!</p>

    <h2><strong>Story Mode & Save System</strong></h2>

    <p><strong>Q: You've mentioned before that there will be a story mode. What would that look like? Is there a set number of days that it would last (example, it'd last 100 days no matter what you do) or would it progress as you do in your story (how many days the story mode lasts being based on how fast you progress)? Additionally, will there be only one save file, or will there be more than one?</strong></p>
    <p><strong>A:</strong> There will be separate save files: one for the campaign and one for the endless mode.</p>
    <p>As for the story - you will see everything at the release, and we'll keep expanding it in future updates.</p>

    <p><strong>Q: What will the saving mechanics be? I.e. will there be multiple save slots, or quick saving etc?</strong></p>
    <p><strong>A:</strong> Yes, you'll have multiple save slots - so you can keep different types of playthroughs. However, a specific campaign or an endless-mode will only allow you to replay the current day.</p>

    <h2><strong>Lore & References</strong></h2>

    <p><strong>Q: Is there going to be hidden lore behind specific characters, and will there be any references to any zombie shows?</strong></p>
    <p><strong>A:</strong> Yes - some characters will have bits of hidden lore and background details. And there will be a few references to other zombie games and shows, but we'd rather keep those a surprise so you can spot them yourself once you play.</p>

    <h2><strong>Endings & Consequences</strong></h2>

    <p><strong>Q: Is there going to be different endgame endings in the proposed story mode of qz that you could get depending on your choices and how well you run the quarantine checkpoint?</strong></p>
    <p><strong>A:</strong> Yes, but we won't say more :)</p>

    <p><strong>Q: Is it possible to lose if you have enough failed inspections?</strong></p>
    <p><strong>A:</strong> Yes - certain events can lead to a game over.</p>
    <p>Failed inspections alone won't instantly end your run, but they feed into larger systems. If you keep missing global objectives, run out of resources, or trigger specific major events, you can lose the game. Your choices stack up, and eventually they can push your settlement past the breaking point.</p>

    <h2><strong>Character Customization & Special Survivors</strong></h2>

    <p><strong>Q: Will we have character customisation?</strong></p>
    <p><strong>A:</strong> We'll have some customisation in our game. You'll see the details later.</p>

    <p><strong>Q: Are you guys planning to make some "funny" survivors to inspect? That will either act strangely or have some very recognisable look? Or maybe some imitations of famous people?</strong></p>
    <p><strong>A:</strong> We do have special survivors you might recognise - but we're keeping the details under wraps for now. Stay tuned for our upcoming announcements.</p>

    <h2><strong>Gameplay Features</strong></h2>

    <p><strong>Q: Do you consider giving face masks to NPCs who are walking in for a check-up? They could be removed like sunglasses or hats. There is a sign in the quarantine area that people should be wearing them, yet no one does.</strong></p>
    <p><strong>A:</strong> As usual - post all the ideas in the suggestions forum on our Discord server.</p>

    <p><strong>Q: Will you add the ability for a person in the block to be brought in for like a standard routine checkup, with like a rare chance for them to begin exhibiting symptoms of the virus and we have to send them back to quarantine or even liquidation?</strong></p>
    <p><strong>A:</strong> Once you send someone to the survivors block, that decision is final - you can't bring them back to the checkpoint later.</p>

    <p><strong>Q: Will there be ways for zombies to come through the clearance gate where you check survivors in. Or maybe attack other survivors waiting in line outside the gate that you have to shoot</strong></p>
    <p><strong>A:</strong> Yes. There will be certain events.</p>

    <h2><strong>Combat & Aggression</strong></h2>

    <p><strong>Q: Is the "aggression" going to be more unpredictable?</strong></p>
    <p><strong>A:</strong> It's not random and can be predictable, but now you will need find out the pattern to defend yourself in time.</p>

    <h2><strong>Contraband & Items</strong></h2>

    <p><strong>Q: Any chance not checking for/confiscating Contraband before sending an Infected into Quarantine/Liquidation will result in them using the Contraband after Aggression takes place?</strong></p>
    <p><strong>A:</strong> It's definitely something we want to explore.</p>
    <p>The idea of contraband affecting behaviour after aggression makes a lot of sense, and it's already on our roadmap.</p>

    <h2><strong>Defense Mode & Drone Missions</strong></h2>

    <p><strong>Q: Were there any alternatives to Drone missions considered prior?</strong></p>
    <p><strong>A:</strong> We never set out to make a typical zombie game. Our core idea has always been about the inspection gameplay - that's the heart of the experience. The horde-fighting segment is more of side activity, something extra you can jump into just for fun.</p>

    <p><strong>Q: Will there be meta progression upgrades beyond your own weapons for the defence mode? (e.g. the escort vehicles, autoturrets, weapons for your soldiers.)</strong></p>
    <p><strong>A:</strong> Right now our main goal is to make the existing defence mini-game more fun, punchy, and enjoyable to play. That's our current focus. Bigger expansions - like new systems, additional units, vehicles, or broader meta-progression - are definitely possible in the future.</p>

    <p>Stay tuned for more developer Q&A sessions and updates on Quarantine Zone: The Last Check!</p>
    `
  },
  {
    id: 3,
    title: "Quarantine Zone Discord Text Q&A #4 - Development Insights & Game Features",
    description: "The developers answer community questions about AI usage, game assets, future plans, character models, gameplay improvements, and various game mechanics.",
    tags: ["Q&A", "Developer", "Community", "Game Features"],
    publishDate: "2025-12-05",
    imageUrl: "/images/news/news01.webp",
    imageAlt: "Quarantine Zone Discord Q&A #4 session with developers.",
    isHome: false,
    seo: {
      title: "Quarantine Zone Discord Q&A #4 - Development Insights & Game Features",
      description: "Read the fourth Discord Q&A with Quarantine Zone developers. Learn about AI usage, game assets, future maps, character models, gameplay improvements, and game mechanics.",
      keywords: "Quarantine Zone Q&A, Discord Q&A #4, AI usage, game assets, character models, gameplay improvements, future maps, Brigada Games"
    },
    addressBar: "discord-qa-4",
    detailsHtml: `
    <p>The developers of <strong>Quarantine Zone: The Last Check</strong> recently held their fourth Discord text Q&A session, sharing insights about development tools, game assets, future plans, and answering various community questions about gameplay features. For detailed information about game features discussed here, check our <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">wiki</a>.</p>

    <h2><strong>Development Tools & Assets</strong></h2>

    <p><strong>Q: Has AI been used in any way to make the game?</strong></p>
    <p><strong>A:</strong> Yes and no. We've used AI voices to check how the scene feels and looks, like it was in the original playtest before the demo went live in May. But there will be no AI used in the release version.</p>

    <p><strong>Q: Were 100% of the models in the game handcrafted or were some taken from third-party resources?</strong></p>
    <p><strong>A:</strong> Some of the assets were bought from fab.com, but there are a lot of handcrafted items too, like tools in your hands.</p>

    <h2><strong>Team Vision & Passion</strong></h2>

    <p><strong>Q: Do you guys have fun working on your game/project? What is the vision for the game in the future?</strong></p>
    <p><strong>A:</strong> Could we make a fun game without having fun making it? Yes, there are some problems (obviously), but this project is love and passion for the whole team.</p>

    <h2><strong>Future Content & Maps</strong></h2>

    <p><strong>Q: Do you have future plan for having different Quarantine Zones maps based on environments, such as vast desert or mountainous village overlooking a city burning on the background? If yes, then is it possible for new scenarios and new challenges?</strong></p>
    <p><strong>A:</strong> We were thinking of them even before the first demo! Change of scenery sounds fun, but we want it to be connected with what's happening inside and outside the checkpoint. For winter we want winter clothes, less bites and some frostbite symptoms, so this mechanic wouldn't be shallow. So there is a decent chance this will appear in the game in later updates.</p>

    <h2><strong>Character Models & Age</strong></h2>

    <p><strong>Q: I noticed in the demo there seemed to be incongruence between the listed ages of survivors and the appearances of those survivors. In the full game, will certain character models be locked into ages more commensurate with their appearances?</strong></p>
    <p><strong>A:</strong> For now - no. We want to approach this problem likewise the weather from question above. If we connect survivor with the documents - we want it to have more substance. Give 'em professions, make their origin location relevant, make some dependencies of their age and behavior, stuff like that. It's not a promise that it will be that way, but an example of how we approach mechanics like this.</p>

    <h2><strong>Gameplay Improvements</strong></h2>

    <p><strong>Q: Will there be a way in the future to make to so the scanner remains active when you enter the symptoms menu so you can continue to see the hidden symptom? i find it frustrating to have to enter and leave the menu to compare them to the example images.</strong></p>
    <p><strong>A:</strong> We've worked on improving the player experience when handling tools, just wait around and you'll see yourself.</p>

    <h2><strong>Pricing & Discounts</strong></h2>

    <p><strong>Q: will there be any discount like an "introduction sale" like some other products</strong></p>
    <p><strong>A:</strong> There is a launch discount being discussed, but we can't say more on it at the moment.</p>

    <h2><strong>Multiplayer & Twitch Integration</strong></h2>

    <p><strong>Q: Have you thought of adding a versus mode in Quarantine zone where a player is in control of zombie attacks or is on the other side of the quarantine zone and try to get in either infected or?</strong></p>
    <p><strong>A:</strong> It's impossible to make any real-time coop/versus game. However (!) we're working on crowd control support as part of our Twitch integration that will add a way for the audience to influence the game creator is playing in a way.</p>

    <h2><strong>Game Mechanics & Features</strong></h2>

    <p><strong>Q: Will there be healthy people that actually have dog bites?</strong></p>
    <p><strong>A:</strong> Although not actually looking the same as a human bite, the same bite could be used. The "dog bite" is only the bite, but it doesn't glow in the UV light, as it doesn't have zombie saliva. While the zombie bite would be the same bite we know, but it glows in the UV light, since it has zombie saliva in it. We joke about it a lot, we just not sure when we will be able to do it.</p>

    <h2><strong>Development Challenges</strong></h2>

    <p><strong>Q: What was the most stressful and/or annoying thing to make.</strong></p>
    <p><strong>A:</strong> There's some mechanics that are not just working as we intended, but we're not ready to get rid of them. Like bruises and necrosis symptoms, or skin diseases with people of different color. Or you know this little bugs that appear and disappear overtime like they are batman or something.</p>

    <h2><strong>Character Diversity</strong></h2>

    <p><strong>Q: Will you be able to check different kind of people? Like Children or disabled people or only men and women?</strong></p>
    <p><strong>A:</strong> There will be no screening of children 100%. We haven't considered anything else at the moment, but it is not an easy topic.</p>

    <h2><strong>Player Safety & Threats</strong></h2>

    <p><strong>Q: Is there any way you can die or be infected yourself in real-time? Can a zombie tear down a wall and come at you while you're checking survivors, or can an infected actually kill you?</strong></p>
    <p><strong>A:</strong> Yes, we've added some of these. While virus is evolving, there will be more ways to die! But it's not main focus of the game, so please don't expect constant life threats everyday.</p>

    <p>Stay tuned for more developer Q&A sessions and updates on Quarantine Zone: The Last Check!</p>
    `
  },
  {
    id: 4,
    title: "Quarantine Zone Release Date Update - 2025 Release Confirmed",
    description: "The development team provides an update on the release date, confirming a 2025 release while working through closed playtest feedback to polish the game.",
    tags: ["Release Date", "Update", "Announcement", "2025"],
    publishDate: "2025-12-05",
    imageUrl: "/images/news/news01.webp",
    imageAlt: "Quarantine Zone release date update announcement.",
    isHome: false,
    seo: {
      title: "Quarantine Zone Release Date Update - 2025 Release Confirmed",
      description: "Quarantine Zone: The Last Check release date update. The game is confirmed for a 2025 release while the team works through closed playtest feedback to polish the experience.",
      keywords: "Quarantine Zone release date, 2025 release, closed playtest, game update, Brigada Games, Devolver Digital"
    },
    addressBar: "release-date-update",
    detailsHtml: `
    <p>Hello, everyone!</p>

    <p>Some of you have seen that info on our Steam page was first changed from November to simply 2025.</p>

    <p>Currently we are running a closed playtest and while it is ongoing - us (the developer team) and the publisher will determine the exact release date but as of yesterday we're still working toward a 2025 release. We might require some extra time to polish the game, thanks to the copius amount of feedback we are receiving and processing at the moment. While waiting for the release, check out our <a href="/guides" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">survival guides</a> to prepare for the game.</p>

    <p>The decision on the exact release date and price will be made soon, and we will update everyone the moment it is made.</p>

    <p>We apologize for the uncertainty but rest assured we're furiously working on the game, taking in feedback, and working to figure out the best release date to get you all into Quarantine Zone!</p>
    `
  },
  {
    id: 5,
    title: "Quarantine Zone Discord Text Q&A #3 - Release Progress & Game Features",
    description: "The developers answer community questions about release timeline, game progress, NPC dialogue, symptoms, endless mode, and various gameplay features.",
    tags: ["Q&A", "Developer", "Community", "Game Features"],
    publishDate: "2025-12-05",
    imageUrl: "/images/news/news01.webp",
    imageAlt: "Quarantine Zone Discord Q&A #3 session with developers.",
    isHome: false,
    seo: {
      title: "Quarantine Zone Discord Q&A #3 - Release Progress & Game Features",
      description: "Read the third Discord Q&A with Quarantine Zone developers. Learn about release progress, NPC dialogue, symptoms, endless mode, Steam Deck support, and gameplay features.",
      keywords: "Quarantine Zone Q&A, Discord Q&A #3, release progress, NPC dialogue, symptoms, endless mode, Steam Deck support, game features, Brigada Games"
    },
    addressBar: "discord-qa-3",
    detailsHtml: `
    <p>The developers of <strong>Quarantine Zone: The Last Check</strong> recently held their third Discord text Q&A session, sharing updates on release progress and answering community questions about various gameplay features.</p>

    <h2><strong>Release Timeline & Progress</strong></h2>

    <p><strong>Q: Is there yet any delay expected yet or is the game still on-time? + Do your team planning announce exact release data in first day of November?</strong></p>
    <p><strong>A:</strong> No comments, as we've said multiple times - the moment there is info on the launch date and price, we'll be making announcements everywhere.</p>

    <p><strong>Q: How far are you guys in terms of being able to release the game? Just a rough percentage as an indicator would be nice</strong></p>
    <p><strong>A:</strong> Right now team is in the process of polishing the build. We did have to push a few of the things we'd love to include on launch, like mod support to post-launch update, but we are rather happy with how the game is shaping up to be and looking forward to improving it even more after launch.</p>

    <h2><strong>Website & Platform Support</strong></h2>

    <p><strong>Q: Will be a website for the game?</strong></p>
    <p><strong>A:</strong> Not something we've planned, but if we do end up with a site in the future, we'll add it to our links here on the platform.</p>

    <p><strong>Q: Will this game be on GeForce Now?</strong></p>
    <p><strong>A:</strong> No such plans at the moment.</p>

    <p><strong>Q: Will the game be playable on the Steamdeck when it's officially released or will that be further out?</strong></p>
    <p><strong>A:</strong> Yes! We are planning to have Steam Deck support on release.</p>

    <h2><strong>Gameplay Mechanics</strong></h2>

    <p><strong>Q: If infected manage to get by into the survivor block, would there be a way to capture them once they turn so they can be studied, or would they have to be eliminated?</strong></p>
    <p><strong>A:</strong> At this point you should think of other people's safety. But there will be ways to study the infected.</p>

    <p><strong>Q: Will there be a way to cure those who have been infected after doing enough research, but it cost a fortune to buy just one.</strong></p>
    <p><strong>A:</strong> There won't be a way, it's a game about survival and trying to save as many others as you can, not about the theoretical cure.</p>

    <h2><strong>NPC Dialogue & Interactions</strong></h2>

    <p><strong>Q: Will you be adding more dialogue to the NPCs? Gossip by the guards or technicians in the checkpoint, idle chatter from the civilians held in quarantine or in the block, maybe even something quick by our character at the beginning or end of the day when we are alone? New chat lines, as survivors enter, that might help give an indication to their health status would be cool.</strong></p>
    <p><strong>A:</strong> Oh. Yeah. Some already added for the survivors (no details), for scientist and soldiers still WIP.</p>

    <h2><strong>Symptoms & Indicators</strong></h2>

    <p><strong>Q: Will there be any more indicators?</strong></p>
    <p><strong>A:</strong> Not sure what was meant by Indicators in the context of the question. If we talking about symptoms, we can say there's close to 50 symptoms right now planned for the game (for all the old and new tools).</p>

    <h2><strong>Game Modes & Difficulty</strong></h2>

    <p><strong>Q: Do we get difficulty levels for endless mode and storyline campaign like more unforgiving penalty score if you haven't listed all symptoms on one survivor?</strong></p>
    <p><strong>A:</strong> Endless mode is planned and somewhat supported at the moment (not main focus however). About difficulties - difficult question, but we're trying to avoid implementing different difficulties.</p>

    <h2><strong>Character Customization & Mod Support</strong></h2>

    <p><strong>Q: Will there be a way to have a pool of names that the game randomly selects from for survivors? I would like to stream the game and use names from chat or real-life friends, celebrities, characters etc. just their names. Thank you.</strong></p>
    <p><strong>A:</strong> While we are planning to both have Twitch integration (at launch) and mod support (post-launch update), the degree to which the integration will be implemented is not something we can share just yet.</p>

    <h2><strong>Convoy Protection & Missions</strong></h2>

    <p><strong>Q: Will there be more additions to the convoy protection part of the game? Like would there be missions where you have to rescue a passing convoy or send a team to fix save your convoy if you couldn't protect them, etc</strong></p>
    <p><strong>A:</strong> We have plans and ideas to further improve that part of the gameplay loop, including post-launch. We can't share any details on it, though.</p>

    <h2><strong>Base Management & Control</strong></h2>

    <p><strong>Q: Will we be able to control the guards actions, or set tasks for our survivors? i.e supply runs, assigning doctors, cooks etc.?</strong></p>
    <p><strong>A:</strong> Not at the release. We will be sharing our plans for the future of the game soon after launch.</p>

    <h2><strong>Zombie Transformation</strong></h2>

    <p><strong>Q: Will you add like a transformation from a human to a zombie?</strong></p>
    <p><strong>A:</strong> It is impossible for us to show player such a transformation as it would've been more like a timelapse, as the process is not immediate but gradual. That's why (already in the demo) the transformations are happening when you sleep.</p>

    <h2><strong>Community Support</strong></h2>

    <p><strong>Q: Is there a way to donate bags of cookie dough?</strong></p>
    <p><strong>A:</strong> Sure! Our game designer will love it and it gives him more energy to work on the game.</p>

    <p>Stay tuned for more developer Q&A sessions and updates on Quarantine Zone: The Last Check!</p>
    `
  },
  {
    id: 6,
    title: "Quarantine Zone Discord Text Q&A #2 - Game Features & Story Mode",
    description: "The developers answer community questions about infected animations, accessibility features, special objectives, pricing, research mechanics, ethics options, and story mode.",
    tags: ["Q&A", "Developer", "Community", "Game Features"],
    publishDate: "2025-12-05",
    imageUrl: "/images/news/news01.webp",
    imageAlt: "Quarantine Zone Discord Q&A #2 session with developers.",
    isHome: false,
    seo: {
      title: "Quarantine Zone Discord Q&A #2 - Game Features & Story Mode",
      description: "Read the second Discord Q&A with Quarantine Zone developers. Learn about infected animations, accessibility features, special objectives, ethics options, and story mode details.",
      keywords: "Quarantine Zone Q&A, Discord Q&A #2, accessibility features, story mode, ethics options, special objectives, game features, Brigada Games"
    },
    addressBar: "discord-qa-2",
    detailsHtml: `
    <p>The developers of <strong>Quarantine Zone: The Last Check</strong> recently held their second Discord text Q&A session, answering community questions about game features, animations, accessibility, and story mode.</p>

    <h2><strong>Infected Animations & Visuals</strong></h2>

    <p><strong>Q: In future versions, will the infected suddenly fall to the ground, twitch, and then get up before attacking?</strong></p>
    <p><strong>A:</strong> This is something that we wanted to add, but we not have the time with all the other priorities in regards to development, but we might be able to add after the release as a part of an update.</p>

    <h2><strong>Accessibility Features</strong></h2>

    <p><strong>Q: What kind of accessibility features/options are planned, if at all?</strong></p>
    <p><strong>A:</strong> We are planning to add accessibility support for colorblind and hearing impaired, providing people with an option to play the game without an issue.</p>

    <h2><strong>Special Objectives & Missions</strong></h2>

    <p><strong>Q: Will there be any special objectives were you need to liquidate a healthy survivor or keep an un-trasformed infected in quarantine until evac</strong></p>
    <p><strong>A:</strong> Yes, there will be a somewhat similar option, you shall see in the full release.</p>

    <h2><strong>Pricing & Release Date</strong></h2>

    <p><strong>Q: Do you know a price for the game yet? Like how much it will be? And do you have a release date yet other than just November? I'm very excited</strong></p>
    <p><strong>A:</strong> The moment we have the information to share with all of you, we'll be making an announcement.</p>

    <h2><strong>Research & Laboratory</strong></h2>

    <p><strong>Q: Are we gonna be able to research biological weapon stuf like the famous t -virus into weapon research</strong></p>
    <p><strong>A:</strong> While there will be research in the lab, it won't give you such research as this is not a game about bio-weapons and evil corporations.</p>

    <h2><strong>Ethics & Moral Choices</strong></h2>

    <p><strong>Q: Is there gonna be, like, ethics options? Like, let's say there's an option to purposefully infect someone to study the process of transformation, would you be able to not do that in order to stay ethical? And would those choices affect anything else, like the reputation system someone else proposed?</strong></p>
    <p><strong>A:</strong> There will be such options given to the players when story line will arrive.</p>

    <h2><strong>Story Mode & Game Modes</strong></h2>

    <p><strong>Q: Are there any plans to include a more set storyline? will it be chapter based? or is it more of a roguelike to see how many days you can survive?</strong></p>
    <p><strong>A:</strong> There is a planned story mode with a set storyline for the game. Endless mode will be available on launch day. So you will be able to both beat the game in a conventional sense and have an option for a "roguelike" playthrough, as it's put in the question.</p>

    <p>Stay tuned for more developer Q&A sessions and updates on Quarantine Zone: The Last Check!</p>
    `
  },
  {
    id: 7,
    title: "Quarantine Zone Discord Text Q&A #1 - Game Mechanics & Features",
    description: "The developers answer community questions about cure research, demo availability, player suggestions, earnings system, symptoms, screening rules, and UI improvements.",
    tags: ["Q&A", "Developer", "Community", "Game Features"],
    publishDate: "2025-12-05",
    imageUrl: "/images/news/news01.webp",
    imageAlt: "Quarantine Zone Discord Q&A #1 session with developers.",
    isHome: false,
    seo: {
      title: "Quarantine Zone Discord Q&A #1 - Game Mechanics & Features",
      description: "Read the first Discord Q&A with Quarantine Zone developers. Learn about cure research, demo availability, earnings system, symptoms, screening rules, and UI features.",
      keywords: "Quarantine Zone Q&A, Discord Q&A #1, game mechanics, symptoms, screening rules, earnings system, UI features, Brigada Games"
    },
    addressBar: "discord-qa-1",
    detailsHtml: `
    <p>The developers of <strong>Quarantine Zone: The Last Check</strong> recently held their first Discord text Q&A session, answering community questions about game mechanics, features, and development plans.</p>

    <h2><strong>Cure Research</strong></h2>

    <p><strong>Q: Will we eventually be able to look into making a cure?</strong></p>
    <p><strong>A:</strong> This is not planned, but you will be able to learn more in the game's storyline.</p>

    <h2><strong>Demo Availability</strong></h2>

    <p><strong>Q: Will the demo still be accessible after the full game releases?</strong></p>
    <p><strong>A:</strong> If there would be any changes to the availability of the demo, we will share an announcement ahead of time. So far there are no such plans.</p>

    <h2><strong>Player Suggestions & Roadmap</strong></h2>

    <p><strong>Q: How likely is it for a player-submitted major game idea to actually be implemented? Is there a definite roadmap ahead, or will major features change as devs feel their way around?</strong></p>
    <p><strong>A:</strong> You will be able to see our post-launch roadmap after the release. That being said, some of the suggestions did find their way into the game.</p>

    <h2><strong>Earnings System</strong></h2>

    <p><strong>Q: Will the game show up top that you got money for passing a non-infected? Or will your earnings be earned silently so you'll see later in the future if you passed an infected or not?</strong></p>
    <p><strong>A:</strong> As is the demo, all the survivors give player money after being successfully inspected, i.e. player gets paid not for passing a healthy survivor, but for completing a screening. You learn if the survivor was healthy or not the next day.</p>

    <h2><strong>Symptoms & Tools</strong></h2>

    <p><strong>Q: Will there be more symptoms than what's in the demo?</strong></p>
    <p><strong>A:</strong> Yes! There will be more symptoms and more tools to look for them.</p>

    <h2><strong>Screening Rules & Customization</strong></h2>

    <p><strong>Q: Will there be options for personal data be relevant for admission? For example, people being blocked from a certain suburb or age range.</strong></p>
    <p><strong>A:</strong> The survivors location is no longer relevant for the custom screening rules. The list of possible custom rules for screening is extensive and does include age among other things.</p>

    <h2><strong>Character Customization</strong></h2>

    <p><strong>Q: Will our character wear proper gloves instead of the ones with your fingers showing off?</strong></p>
    <p><strong>A:</strong> That certainly can be added.</p>

    <h2><strong>UI & Inspection Features</strong></h2>

    <p><strong>Q: In the inspection menu, to show previous symptoms (which cleared up while in quarantine)? It's not game-changing but could be could to have that progressive feature to give the inspections a 'clinical' feel.</strong></p>
    <p><strong>A:</strong> The tablet UI only shows the symptoms that player had uncovered/selected during the initial screening process, before sending survivor to quarantine. Meaning - UI never shows you symptoms you've missed, only those you've selected, same in demo.</p>

    <p>Stay tuned for more developer Q&A sessions and updates on Quarantine Zone: The Last Check!</p>
    `
  }
]

