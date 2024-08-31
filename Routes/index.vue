<script>
import { createRouter, createWebHistory } from 'vue-router';
import Services from 'pages/Services';
import Home from "pages/Home"
const routes = [
{
path: '/services',
name: 'Services',
component: Services
},
  {
path : '/home',
name: 'Home',
component: Home

  },

];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
});

export default router;
</script>
