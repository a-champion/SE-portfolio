$(() => {
    const changeNavOnScroll = () => {
        if($(window).scrollTop()){
            $('nav').addClass('top');
        } else {
            $('nav').removeClass('top');
        }
    }
    $(window).on("scroll", changeNavOnScroll);

    const $rotatingTitle = $('.rotatingTitle');

    const $mainContainer = $('#mainContainer');
    const $subContainer = $('#subContainer');

    

    const goResume = () => {
        const replaceWResume = () => {
           

            $mainContainer.empty();

            
            const $resumeContainer = $('<div>').attr('id','resumeContainer').appendTo($mainContainer);

            const $h1 = $('<h1>').text("Resume").appendTo($resumeContainer);

            const $profSumDiv = $('<div>').attr('id', 'profSum').appendTo($resumeContainer);

            const $h2 = $('<h2>').text("Professional Summary").appendTo($profSumDiv);

            const $profSumText = $('<p>').text("Systematic Data Entry Clerk with 3 years of experience in organizing and managing data. Trained in database systems management using various technology platforms. Efficient in overseeing project deadlines by prioritizing and communicating with teammates. Administrative team member with strong history of providing clerical support and operational assistance to support staff needs. Diplomatic communicator and self-motivated worker with decisive nature necessary to manage independent work. Experienced in coordinating documents, supplies, and project resources.").appendTo($profSumDiv);

             
            const addSkills = () => {
                const $skills = $('<div>').attr('id', 'skills').appendTo($resumeContainer);

                $h2.clone().attr('id','skillsh2').text('Skills').appendTo($skills);

                const $skillList = $('<ul>').attr('id','skillList').appendTo($skills);

                let $eachSkill = $('<li>').text("Object Oriented Programming").appendTo($skillList).css('list-style','none');

                $eachSkill.clone().text("JavaScript").appendTo($skillList);

                $eachSkill.clone().text("Jquery").appendTo($skillList);

                $eachSkill.clone().text("Python").appendTo($skillList);

                $eachSkill.clone().text("Filing and data archiving").appendTo($skillList);
            };

            addSkills();

            
            const addXp = () => {

                const $workExperience = $('<div>').attr('id', 'workHistory').appendTo($resumeContainer);

                const $h3 = $('<h3>').text("Work Experience").appendTo($workExperience);

                const $jobList = $('<ul>').attr('id', 'jobList').appendTo($workExperience);

                const $job = $('<li>').attr('id','fdc').text("Fire Control Specialist | U.S. Army Feb. 2014 - Oct. 2017").appendTo($jobList);

                const $fdcDescrip = $('<p>').text("Devoted special emphasis to punctuality and worked to maintain outstanding attendance record, consistently arriving to work ready to start immediately. Reviewed completed work for compliance with regulations. Identified data entry errors and reported to necessary departments. Consistently met deadlines and requirements for all production work orders. Obtained scanned records and uploaded into database.").appendTo($('#fdc'));
                $job.clone().attr('id','sales').text("Store Advisor | GameStop Dec.2012 - Jun. 2013").appendTo($jobList);

                const $salesDescrip = $('<p>').text("Helped customers complete purchases, locate items and join reward programs to promote loyalty, satisfaction and sales numbers. Kept drawers accurate, current and secure by checking bills for counterfeit markers, storing large bills and keeping adequate change. Maintained current knowledge of store promotions and highlighted sales to customers. Upheld high standards of accounting accuracy, quickly and accurately counting drawers at start and end of each shift.").appendTo($('#sales'));
            };

            addXp();
            

            $mainContainer.fadeIn(1250);
        };

        $mainContainer.fadeOut(1250, replaceWResume);
        
        // const $mainContainer = $('#mainContainer');
        // const $subContainer = $('#subContainer');
        
        // $subContainer.fadeOut("slow").delay(2500);
        
    };

    const goBio = () => {

        const replaceWBio = () => {
            $mainContainer.empty();

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


            $mainContainer.fadeIn(1500);
        };
        
        $mainContainer.fadeOut(1500, replaceWBio);

    };

    const goProjects = () => {
        const replaceWProj = () =>{
            $mainContainer.empty();

            const $h1 = $('<h1>').text("Projects").css('text-align', 'center').appendTo($mainContainer);

            const $projContainer = $('<div>').attr('id', 'projectsContainer').css("display", "flex").appendTo($mainContainer);

            const $h2 = $('<h2>');
            
            const $p = $('<p>');

            const $projOne = $('<div>').attr('id','projectOne').css({
                "background-image": "url(https://i.imgur.com/IO5TrIc.jpeg)",
                "height": "150px",
                "margin": "10px",
                "padding": "5px",
                "border-radius": "12px",
                "overflow": "auto"
            }).appendTo($projContainer);

            $projOne.clone().attr('id','projectTwo').css("background-image", "url(https://i.imgur.com/0dqdq3m.jpeg)").appendTo($projContainer);

            

            $projOne.clone().attr('id', 'projectThree').css("background-image", "url(https://i.imgur.com/jp3vtik.png)").appendTo($projContainer);
            

            $h2.clone().text("Lorem Ipsum I").appendTo('#projectOne');

            $h2.clone().text("Lorem Ipsum II").appendTo('#projectTwo');

            $h2.clone().text("Lorem Ipsum III").appendTo('#projectThree');

            $p.clone().text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor augue, vestibulum id pharetra sit amet, vulputate sit amet nisi. Cras sed augue nec sapien faucibus pulvinar eget in massa. Integer sodales ex non magna elementum pretium. Suspendisse eleifend ligula vel metus finibus scelerisque ut vitae lectus. Integer id mattis neque, ac pretium risus. Pellentesque nec felis volutpat, commodo ipsum id, sollicitudin risus. Quisque id magna non nisi dapibus suscipit. Mauris nec tincidunt mi. Vivamus vulputate semper leo, vel sodales lacus convallis vel. Donec efficitur purus tincidunt nibh maximus, vel commodo ante tristique. Nulla facilisi. Sed vitae eros vehicula enim mollis luctus. Vivamus vel rutrum eros. Nullam mollis nec enim sit amet auctor. Suspendisse dictum tempus neque, sed interdum quam.").appendTo('#projectOne');

            $p.clone().text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor augue, vestibulum id pharetra sit amet, vulputate sit amet nisi. Cras sed augue nec sapien faucibus pulvinar eget in massa. Integer sodales ex non magna elementum pretium. Suspendisse eleifend ligula vel metus finibus scelerisque ut vitae lectus. Integer id mattis neque, ac pretium risus. Pellentesque nec felis volutpat, commodo ipsum id, sollicitudin risus. Quisque id magna non nisi dapibus suscipit. Mauris nec tincidunt mi. Vivamus vulputate semper leo, vel sodales lacus convallis vel. Donec efficitur purus tincidunt nibh maximus, vel commodo ante tristique. Nulla facilisi. Sed vitae eros vehicula enim mollis luctus. Vivamus vel rutrum eros. Nullam mollis nec enim sit amet auctor. Suspendisse dictum tempus neque, sed interdum quam.").appendTo('#projectTwo');

            $p.clone().text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor augue, vestibulum id pharetra sit amet, vulputate sit amet nisi. Cras sed augue nec sapien faucibus pulvinar eget in massa. Integer sodales ex non magna elementum pretium. Suspendisse eleifend ligula vel metus finibus scelerisque ut vitae lectus. Integer id mattis neque, ac pretium risus. Pellentesque nec felis volutpat, commodo ipsum id, sollicitudin risus. Quisque id magna non nisi dapibus suscipit. Mauris nec tincidunt mi. Vivamus vulputate semper leo, vel sodales lacus convallis vel. Donec efficitur purus tincidunt nibh maximus, vel commodo ante tristique. Nulla facilisi. Sed vitae eros vehicula enim mollis luctus. Vivamus vel rutrum eros. Nullam mollis nec enim sit amet auctor. Suspendisse dictum tempus neque, sed interdum quam.").appendTo('#projectThree');






            $mainContainer.fadeIn(1500);
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