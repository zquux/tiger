import type { CryptoEntry } from '../model/types'

import { useQuery } from '@tanstack/react-query'

import { cryptoBoardQueries } from '../api/queries'
import { useSortData } from '../lib/useSortData'
import headers from '../model/headers.json'
import { SortableHeader } from './SortableHeader'

export function Board() {
  const { data, isPending, isError, error } = useQuery(
    cryptoBoardQueries.cryptoBoard()
  )
  const { handleSort, getSortedArray } = useSortData()

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (!data) return <div>No data found</div>

  const sortedData = getSortedArray(data)

  return (
    <div
      className='relative mx-auto max-w-[1150px] overflow-x-auto bg-lightGray'>
      <span className='font-Nexa text-2xl font-bold text-trafficWhite'>
        Tiger&apos;s stock leaderboard
      </span>
      <table className='mt-10 table-auto border border-gray-300 text-left'>
        <thead>
          <tr className='font-PTSerif text-sm text-trafficWhite'>
            {headers.map(header => (
              <th
                className='cursor-pointer border p-2'
                key={header.title}>
                <SortableHeader
                  title={header.title}
                  name1={header.name1}
                  name2={header.name2}
                  field={header.field}
                  onSort={handleSort}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item: CryptoEntry) => (
            <tr
              key={item.title}
              className='font-PTSerif'>
              <td className='text-tangerine'>{item.symbol}</td>
              <td className='text-trafficWhite'>{item.currentPrice}</td>
              <td className='text-silverGray'>{item.recommendedDate}</td>
              <td className='text-silverGray'>{item.marketCap}</td>
              <td className='text-trafficWhite'>{item.recommendedPrice}</td>
              <td
                className={
                  item.returnSinceRec > 0
                    ? 'text-lightGreen'
                    : 'text-paradiseRed'
                }>
                {item.returnSinceRec > 0
                  ? `+${item.returnSinceRec}%`
                  : `${item.returnSinceRec}%`}
              </td>
              <td
                className={
                  item.sp500Return > 0 ? 'text-lightGreen' : 'text-paradiseRed'
                }>
                {item.sp500Return > 0
                  ? `+${item.sp500Return}%`
                  : `${item.sp500Return}%`}
              </td>
              <td
                className={
                  item.sp500vsReturn > 0
                    ? 'text-lightGreen'
                    : 'text-paradiseRed'
                }>
                {item.sp500vsReturn > 0
                  ? `+${item.sp500vsReturn.toFixed(2)}%`
                  : `${item.sp500vsReturn.toFixed(2)}%`}
              </td>
              <td className='text-silverGray'>{item.risk}</td>
              <td className='text-trafficWhite'>
                {item.isOpen ? 'Open' : 'Close'}
              </td>
              <td className='text-trafficWhite'>{item.closingPrice}</td>
              <td className='text-silverGray'>{item.closingDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
