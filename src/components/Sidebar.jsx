import { Flex, Box, Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <Flex direction="row" gap="2" className='p-2 h-full w-full '>
      <Box className='w-full shadow-md pt-8 p-2 rounded-lg relaive'>
       <Button radius='full' size='3' className='w-full hover:cursor-pointer sticky' onClick={handleNavigateHome}>Home</Button>
      </Box>
    </Flex>
  )
}
    