$(function() {
    $("#typed").typed({
        strings: ["......?", "Jack Chang."],
        typeSpeed: 50,
        callback: function() {
            lift();
        }
    });

    function lift() {
        $("#title").addClass("lift-text");
    }

    $("#linkedin_icon").hover(
        function() {
            $(this).addClass('ion-social-linkedin-outline');
            $(this).removeClass('ion-social-linkedin');
        },
        function() {
            $(this).addClass('ion-social-linkedin');
            $(this).removeClass('ion-social-linkedin-outline');
        }
    );

    $("#github_icon").hover(
        function() {
            $(this).addClass('ion-social-github-outline');
            $(this).removeClass('ion-social-github');
        },
        function() {
            $(this).addClass('ion-social-github');
            $(this).removeClass('ion-social-github-outline');
        }
    );

    $("#youtube_icon").hover(
        function() {
            $(this).addClass('ion-social-youtube-outline');
            $(this).removeClass('ion-social-youtube');
        },
        function() {
            $(this).addClass('ion-social-youtube');
            $(this).removeClass('ion-social-youtube-outline');
        }
    );
});
