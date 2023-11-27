import {useAppSelector} from "@/app/store/hooks";
import {partners} from "@/app/components/landing/partners/partners.data";



export const useSponsors = () => {

  const sponsors =partners
  const countSponsors = sponsors?.length||0
  const isSponsors = countSponsors > 0
  const countSponsorsInRow = Math.floor(countSponsors / 3)

  const randomSponsors = isSponsors ? [...partners].sort(() => Math.random() - 0.5):[];
  const sponsors1 = randomSponsors.slice(0, countSponsorsInRow)
  const sponsors2 = randomSponsors.slice(countSponsorsInRow, countSponsorsInRow * 2)
  const sponsors3 = randomSponsors.slice(countSponsorsInRow * 2)
  return {sponsors, isSponsors, sponsors1, sponsors2, sponsors3}
}