<script lang="ts">
    import personworkingimg from '$lib/assets/person-working.jpg';
    import teamworkingimg from '$lib/assets/teamwork.jpg';
    import { BookAIcon, Box, Camera, Crown, HandshakeIcon, Heart, LightbulbIcon, StarsIcon } from 'lucide-svelte';

    interface ValueCard {
        icon: typeof Box | typeof Camera | typeof Crown | typeof Heart;
        title: string;
        description: string;
        color: string;
    }

    const values: ValueCard[] = [
        {
            icon: LightbulbIcon,
            title: "Embrace Innovation",
            description: "We're passionate about staying at the forefront of technological advancements. We constantly seek out new ideas, methodologies, and technologies to provide our clients with the most innovative solutions possible.",
            color: "#FED7AA"
        },
        {
            icon: StarsIcon,
            title: "Deliver Excellence",
            description: "Quality is at the heart of everything we do. We're committed to delivering projects that not only meet but exceed expectations, setting new standards in the industry and ensuring our clients' success.",
            color: "#A5F3FC"
        },
        {
            icon: HandshakeIcon,
            title: "Foster Collaboration",
            description: "We believe that the best results come from teamwork. We foster a collaborative environment, both within our team and with our clients, to create solutions that truly make a difference.",
            color: "#FEF08A"
        },
        {
            icon: BookAIcon,
            title: "Continuous Learning",
            description: "In the fast-paced world of technology, standing still means falling behind. We're dedicated to continuous learning and improvement, constantly expanding our knowledge and skills to better serve our clients.",
            color: "#DDD6FE"
        }
    ];
</script>


<div class="mission-container">
    <div class="mission">
        <div class="mission-text">
            <h1> About us </h1>
            <p> 
                At Zentinel, we are passionate about transforming visionary ideas into cutting-edge realities. 
                As a dynamic software development consulting startup, we specialize in delivering high-quality 
                projects that harness the power of emerging technologies. Our mission is to empower businesses to 
                thrive in the digital age by providing innovative solutions tailored to their unique needs.
            </p>
            <p>
                We believe that staying ahead of the technological curve is not just an advantage – 
                it's a necessity. That's why we've made it our purpose to be the bridge between groundbreaking 
                technologies and the companies that can benefit from them most. With Zentinel as your partner, 
                you're not just keeping pace with the future; you're helping to shape it.
            </p>
        </div>
        <div class="mission-image">
            <img src={personworkingimg} alt="Person working" />
        </div>
    </div>
    <div class="building">
        <div class="building-text">
            <p>
                We want to help you achieve your goals by providing you with the best solutions for your business.
                Always striving to be on the cutting edge of technology, we are constantly innovating and improving our products.
            </p>
        </div>
        <div class="building-image">
            <img src={teamworkingimg} alt="Team working" />
        </div>
    </div>
    <div class="values">
        <h1> Our values </h1>
        <p class="intro-text">
            At Zentinel, our values are the cornerstone of everything we do. They guide our decisions, shape our culture, 
            and drive our commitment to excellence. Here are the principles that define who we are.
        </p>
        <div class="values-grid">
            {#each values as value}
                <div class="value-card">
                    <div class="icon-wrapper" style="background-color: {value.color}">
                        <svelte:component this={value.icon} size={24} />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                </div>
            {/each}
        </div>
    </div>
</div>


<style>
    .mission-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        padding-top: 8rem;
        padding-left: 5rem;
        padding-right: 5rem;
        flex-direction: column;
    }

    .mission {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        padding-bottom: 4rem;
    }

    .mission-text {
        color: rgb(0, 0, 0);
        padding-left: 2rem;
        padding-right: 1rem;
    }

    .mission-text h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    .mission-text p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5;
    }

    .mission-image {
        display: flex;
        justify-content: center;
        align-items: top;
        aspect-ratio: 3/2; 
    }

    .mission-image img {
        width: 90%;
        height: auto;
        object-fit: cover;
        border-radius: 1rem;
    }

    .building {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .building-text {
        flex: 1;
        color: black;
        width: 55%;
        text-align: center;
    }

    .building-text p {
        font-size: 2rem;
        font-weight: 300;
        line-height: 2.5rem;
        padding: 2rem;
    }
    
    .building-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .building-image img {
        width: 80%;
        height: 60%;
        object-fit: cover;
        border-radius: 0.3rem;
    }




    @media (max-width: 768px) {
        .mission-container {
            padding-top: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
            justify-content: center;
            align-items: center;
        }

        .mission {
            display: flex;
            flex-direction: column;
            padding-bottom: 0;
        }

        .mission-text {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }

        .mission-text h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .mission-text p {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
        }

        .mission-image {
            display: flex;
            justify-content: center;
            align-items: top;
        }

        .mission-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.3rem;
        }

        .building {
            display: flex;
            flex: 1;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        .building-text {
            flex: 1;
            color: black;
            width: 100%;
            text-align: center;
        }

        .building-text p {
            font-size: 1.5rem;
            font-weight: 300;
            line-height: 2rem;
            padding: 1rem;
        }

        .building-image {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .building-image img {
            width: 100%;
            height: 60%;
            object-fit: cover;
            border-radius: 0.3rem;
        }
    }

    .values {
        padding: 4rem 1rem;
    }

    .values h1 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        color: black;
    }

    .values h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
        margin-top: 2rem;
        color: black;
    }

    .values p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #555;
    }

    .intro-text {
        max-width: 800px;
        margin: 0 auto 2rem;
        text-align: center;
        color: #555;
        line-height: 1.6;
        font-size: 1.2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .values-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .value-card {
        background-color: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .icon-wrapper {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .value-card p {
        color: #555;
        line-height: 1.5;
        margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
        .values-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

</style>