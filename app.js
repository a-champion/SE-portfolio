
$(() => {

    // animation to move to element. 
    const $moveTo = ($element) => {
        $('html,body').animate({
            scrollTop: $($element).offset().top},'slow'
            );
        };

    // sticky nav to add top class to navbar when scrolled to top
    const changeNavOnScroll = () => {
        if($(window).scrollTop()){
            $('nav').addClass('top');
        } else {
            $('nav').removeClass('top');
        }
    }
    $(window).on("scroll", changeNavOnScroll);

    // playing with my homescreen trying to change text in span after interval (no luck yet but thats because moving was a pain)
    const $changeText = () => {
        const textArr = ['pokemon master', 'creative', 'gamer', 'nerd', 'foodie', 'husband', 'father','warrior of light', 'beast with one-thousand faces', 'shadow with a billion eyes'];
        
        const chooseString = () => {
            let pickedString = textArr[Math.floor(Math.random() * textArr.length)];
            return pickedString;
        };

        const $changingText = $('.rotatingTitle');
        $changingText.text(chooseString());
    };

    // function to "animate" rotating title
    const $rotatingTitle = () => {
        const $changingText = $('.rotatingTitle');
        $changingText.delay(2000).fadeOut(1000, $changeText);
        $changingText.fadeIn(1000).delay(2000).fadeOut(1000, $changeText);
        $changingText.fadeIn(1000);
    };

    const $textLoop = setInterval($rotatingTitle, 8000);

    $rotatingTitle();
    

    const $mainContainer = $('#mainContainer');
    const $subContainer = $('#subContainer');

    

    const goResume = () => {
        // const replaceWResume = () => {
           

        //     $mainContainer.empty();

        //     const $placeHolder = $('<div>').attr('id','scrollPoint').appendTo($mainContainer);
            
        //     const $resumeContainer = $('<div>').attr('id','resumeContainer').appendTo($mainContainer);

        //     const $h1 = $('<h1>').text("Resume").appendTo($resumeContainer);

        //     const $profSumDiv = $('<div>').attr('id', 'profSum').appendTo($resumeContainer);

        //     const $h2 = $('<h2>').text("Professional Summary").appendTo($profSumDiv);

        //     const $profSumText = $('<p>').text("Systematic Data Entry Clerk with 3 years of experience in organizing and managing data. Trained in database systems management using various technology platforms. Efficient in overseeing project deadlines by prioritizing and communicating with teammates. Administrative team member with strong history of providing clerical support and operational assistance to support staff needs. Diplomatic communicator and self-motivated worker with decisive nature necessary to manage independent work. Experienced in coordinating documents, supplies, and project resources.").appendTo($profSumDiv);

             
        //     const addSkills = () => {
        //         const $skills = $('<div>').attr('id', 'skills').appendTo($resumeContainer);

        //         $h2.clone().attr('id','skillsh2').text('Skills').appendTo($skills);

        //         const $skillList = $('<ul>').attr('id','skillList').appendTo($skills);

        //         let $eachSkill = $('<li>').text("Object Oriented Programming").appendTo($skillList).css('list-style','none');

        //         $eachSkill.clone().text("JavaScript").appendTo($skillList);

        //         $eachSkill.clone().text("Jquery").appendTo($skillList);

        //         $eachSkill.clone().text("Python").appendTo($skillList);

        //         $eachSkill.clone().text("Filing and data archiving").appendTo($skillList);
        //     };

        //     addSkills();

            
        //     const addXp = () => {

        //         const $workExperience = $('<div>').attr('id', 'workHistory').appendTo($resumeContainer);

        //         const $h3 = $('<h3>').text("Work Experience").appendTo($workExperience);

        //         const $jobList = $('<ul>').attr('id', 'jobList').appendTo($workExperience);

        //         const $job = $('<li>').attr('id','fdc').text("Fire Control Specialist | U.S. Army Feb. 2014 - Oct. 2017").appendTo($jobList);

        //         const $fdcDescrip = $('<p>').text("Devoted special emphasis to punctuality and worked to maintain outstanding attendance record, consistently arriving to work ready to start immediately. Reviewed completed work for compliance with regulations. Identified data entry errors and reported to necessary departments. Consistently met deadlines and requirements for all production work orders. Obtained scanned records and uploaded into database.").appendTo($('#fdc'));
        //         $job.clone().attr('id','sales').text("Store Advisor | GameStop Dec.2012 - Jun. 2013").appendTo($jobList);

        //         const $salesDescrip = $('<p>').text("Helped customers complete purchases, locate items and join reward programs to promote loyalty, satisfaction and sales numbers. Kept drawers accurate, current and secure by checking bills for counterfeit markers, storing large bills and keeping adequate change. Maintained current knowledge of store promotions and highlighted sales to customers. Upheld high standards of accounting accuracy, quickly and accurately counting drawers at start and end of each shift.").appendTo($('#sales'));
        //     };

        //     addXp();
            
        //     $mainContainer.css('display','block');
        //     $moveTo($placeHolder);
        //     //previously used fadein wanted to incorporate with moveTo function however was not functional. 
        //     //unsure of which I prefer. looking deeper into combining the two. maybe create and display the heading for each section
        //     // then moving to that item while the rest of content fades in? perhaps.

        //     // $mainContainer.fadeIn(1250, $moveTo($resumeContainer));
        // };

        // $mainContainer.fadeOut(1250, replaceWResume);
        $mainContainer.fadeOut(1250);
        
        // const $mainContainer = $('#mainContainer');
        // const $subContainer = $('#subContainer');
        
        // $subContainer.fadeOut("slow").delay(2500);
        
    };

    const goBio = () => {

        const replaceWBio = () => {
            $mainContainer.empty();

            const $placeHolder = $('<div>').attr('id','scrollPoint').appendTo($mainContainer);

            const $bioContainer = $('<div>').attr('id','bioContainer').appendTo($mainContainer);


            const $h2 = $('<h2>').text("About Me").appendTo($bioContainer);

            const $aboutMe = $('<p>').appendTo($bioContainer);

            $aboutMe.text("Software engineer with several years of customer service and military experience. My background has prepared me for cross-team collaboration while also satisfying client expectations. I use the knowledge and experience that I have obtained to work efficiently in high-stress situations, analyze my team's strengths, and delegate tasks, in order to meet timeline expectations.");

            const $contact = $('<div>').appendTo($bioContainer);

            $h2.clone().text("Contacts").appendTo($contact);
            
            const $ul = $('<ul>').appendTo($contact);

            const $li = $('<li>');

            $li.clone().text("Email - a.champion1506@gmail.com").appendTo($ul);

            $li.clone().text("Mobile - (xxx)-xxx-xxxx").appendTo($ul);

            $mainContainer.css('display','block');
            $moveTo($placeHolder);
            // $mainContainer.fadeIn(1500);
        };
        
        $mainContainer.fadeOut(1500, replaceWBio);

    };

    const goProjects = () => {
        const replaceWProj = () =>{
            $mainContainer.empty();

            const $placeHolder = $('<div>').attr('id','scrollPoint').appendTo($mainContainer);

            const $h1 = $('<h1>').attr('id', 'projectHead').text("Projects").css('text-align', 'center').appendTo($mainContainer);

            const $projContainer = $('<div>').attr('id', 'projectsContainer').appendTo($mainContainer);

            const $h2 = $('<h2>');
            
            const $p = $('<p>');

            const $projOne = $('<div>').attr('id','projectOne').appendTo($projContainer);

            $projOne.clone().attr('id','projectTwo').appendTo($projContainer);


            $projOne.clone().attr('id', 'projectThree').appendTo($projContainer);
            

            $h2.clone().attr('id', 'projOneTitle').text("WithMe").css("text-align" ,"center").appendTo('#projectOne');

            $('<img id="projImgs" src="./img/Project-2-WithMe.png"/>').insertAfter($("#projOneTitle")).css({
                'height': 'auto',
                'width': 'auto',
                'max-width': '450px', 
                'max-height': '450px',
                'display': 'block',
                'margin-left': 'auto',
                'margin-right': 'auto',
            })

            $h2.clone().attr('id', 'projTwoTitle').text("Rate My Brat").css("text-align" ,"center").appendTo('#projectTwo');

            $('<img id="projImgs" src="./img/RMB.png"/>').insertAfter($("#projTwoTitle")).css({
                'height': 'auto',
                'width': 'auto',
                'max-width': '450px', 
                'max-height': '450px',
                'display': 'block',
                'margin-left': 'auto',
                'margin-right': 'auto',
            })

            $h2.clone().attr('id', 'projThreeTitle').text("The Fold - Capstone").css("text-align" ,"center").appendTo('#projectThree');

            $('<img id="projImgs" src="./img/fold.png"/>').insertAfter($("#projThreeTitle")).css({
                'height': 'auto',
                'width': 'auto',
                'max-width': '450px', 
                'max-height': '450px',
                'display': 'block',
                'margin-left': 'auto',
                'margin-right': 'auto',
            })

            $p.clone().text("WithMe is a database application with full CRUD for adding and tracking different collectables. It uses EJS to render pages serverside and bcrypt and express sessions for user authentication and authorization. Data is stored within MongoDB.").appendTo('#projectOne');

            $p.clone().text("Rate my brat is a full-stack application using Express and React. Users can upload and rate different types of sausages or brats.  ").appendTo('#projectTwo');

            $p.clone().text("This project served as my final project while attending General Assembly's full-stack software engineer immersive remote program. The fold ideally serves as a place for clients to share clips with each other. It is currently limited to youtube videos and they can be embeded into a post by providing the video_ID in the contentURL form input. I developed this full stack application in two weeks using technologies I learned on the spot. The backend API was developed using the Java Spring Boot framework. The frontend was developed using React. Data is stored in Postgresql tables.").appendTo('#projectThree');





            $mainContainer.css('display','block');
            $moveTo($placeHolder);
            // $mainContainer.fadeIn(1500);
        }
        $mainContainer.fadeOut(1500, replaceWProj);
    };





    $(() => {
        $('#aboutMe').on('click', goBio);
        $('#resume').on('click', goResume);
        $('.projects').on('click', goProjects);
    
    // let titles = ['software developer', 'gamer', 'funny guy', 'creative type', 'generic description here type guy.'];
    // const changeText = (titlesArr) =>{ //takes an array and will change the rotatingTitle class to the next title. Resets at the end of the
    //     for(let i = 0; i < titlesArr.length; i++){
    //         ('.rotatingTitle').text(`${titlesArr[i]}`).delay(800);
    //     };
    // };
    
    // $('.rotatingTitle').fadeOut();

    // $('body').setInterval(changeText(titles), 3000);


    });
});