// import { useAuthStore } from '@/store/modules/auth';
//
// export function useAuth() {
//   const authStore = useAuthStore();
//
//   function hasAuth(codes: string | string[]) {
//     if (!authStore.isLogin) {
//       return false;
//     }
//     return codes.some(code => authStore.userInfo.buttons.includes(code));
//   }
//
//   return {
//     hasAuth
//   };
// }
