import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillsList.vue"),
    },

    {
      path: "/tp",
      name: "tp",
      component: () => import("../views/TrainingProvider.vue"),
    },

    {
      path: "/employer",
      name: "employer",
      component: () => import("../views/Employer.vue"),
    },

    {
      path: "/courses/:id",
      name: "course",
      component: () => import("../views/CourseView.vue"),
    },

    {
      path: "/courses",
      name: "courses",
      component: () => import("../views/CoursesView.vue"),
    },

    {
      path: "/jobs/:id",
      name: "job",
      component: () => import("../views/JobView.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/JobsView.vue"),
    },

    {
      path: "/skill_passport",
      name: "skill_passport",
      component: () => import("../views/SkillPassport.vue"),
    },

    {
      path: "/jobs_match",
      name: "jobs_match",
      component: () => import("../views/JobsMatch.vue"),
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
