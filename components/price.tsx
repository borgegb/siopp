import {
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Price() {
  return (
    <div className="w-full bg-blue-100  p-4 shadow-sm">
      <h1 className="text-3xl flex justify-center items-center font-bold tracking-tighter sm:text-5xl">
        Kampanjepriser!
      </h1>
      <p className="text-xl py-2 px-4 text-center">
        12 mnd kampanje fra{" "}
        <span className="bg-yellow-200 text-2xl p-0.5 rounded-md">599,-</span>{" "}
        inkludert leie av utstyr! Spar
        <span className="text-red-500 font-bold text-3xl"> 8244,-</span>
      </p>
      <Link href="/form">
        <Table className="rounded-md">
          <TableBody className="divide-y ">
            <TableRow className="text-base bg-gray-50">
              <TableCell className="font-medium">Bredbånd 100</TableCell>
              <TableCell className="text-center leading-tight">
                100 mbps
              </TableCell>
              <TableCell className="text-center text-md font-semibold">
                599,-
                <div className="text-xs text-gray-500 line-through">848,-</div>
              </TableCell>
              <TableCell className="space-y-1">
                <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="text-base bg-white">
              <TableCell className="font-medium">Bredbånd 500</TableCell>
              <TableCell className="text-center leading-tight">
                500 mbps
              </TableCell>
              <TableCell className="text-center font-semibold">
                699,-
                <div className="text-xs text-gray-500 line-through">1008,-</div>
              </TableCell>

              <TableCell className="space-y-1">
                <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="text-base bg-gray-50">
              <TableCell className="font-medium leading-tight">
                Bredbånd 100 & T-We
              </TableCell>
              <TableCell className="text-center leading-tight">
                100 mbps
              </TableCell>
              <TableCell className="text-center font-semibold">
                799,-
                <div className="text-xs text-gray-500 line-through">1426,-</div>
              </TableCell>
              <TableCell className="space-y-1">
                <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="text-base bg-white">
              <TableCell className="font-medium leading-tight">
                Bredbånd 500 & T-We
              </TableCell>
              <TableCell className="text-center leading-tight">
                500 mbps
              </TableCell>
              <TableCell className="text-center font-semibold">
                899,-
                <div className="text-xs text-gray-500 line-through">1586,-</div>
              </TableCell>
              <TableCell className="space-y-1">
                <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Link>
      <p className="justify-start text-3xl py-2 px-4"></p>
    </div>
  );
}
