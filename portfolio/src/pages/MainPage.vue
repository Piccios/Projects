<script>
</script>

<template>
    <section class="main">
        <div class="profile-card">
            <!-- Fronte della card -->
            <div class="front">
                <h1>Lorenzo Picchi</h1>
                <h4>Web Developer</h4>
                <div class="propic">
                    <img src="/img/propic.jpg" alt="Profile Picture">
                </div>
            </div>

            <!-- Retro della card -->
            <div class="back">
                <h3>About Me</h3>
                <p>I am a Junior Web Developer with a strong passion for technology and computer science. My journey started in adolescence and led me, after several years of experience in logistics, to switch careers into web development. I am a dynamic and proactive person, always ready to face new challenges, both technically and personally. My thirst for knowledge drives me to continuously grow and experiment, both in my work and in everyday life.</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section.main {
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    .profile-card {
        width: 250px;
        height: 400px;
        perspective: 1000px;
        position: relative;

        .front,
        .back {
            width: 100%;
            height: 100%;
            border-radius: 15px;
            position: absolute;
            backface-visibility: hidden;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .front {
            background-color: rgba(112, 181, 255, 0.349);
            z-index: 2;
            transform: rotateY(0deg);

        }

        .back {
            background-color: rgba(112, 181, 255, 0.9);
            transform: rotateY(180deg);

        }

        
        &:hover .front {
            transform: rotateY(-180deg);
            transition: transform 0.6s;
        }

        &:hover .back {
            transform: rotateY(0deg);
            transition: transform 0.6s;
        }

        .propic {
            img {
                border-radius: 50%;
                height: 200px;
                width: 200px;
            }
        }
    }
}
</style>
