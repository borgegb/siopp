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
import Image from "next/image";

export default function Price() {
  return (
    <div className="w-full bg-blue-100 sm:p-4 px-0 py-4 shadow-sm">
      <h1 className="text-3xl flex justify-center items-center font-bold tracking-tighter sm:text-5xl">
        Kampanjepriser!
      </h1>
      <p className="text-xl py-2 px-4 text-center">
        12 mnd kampanje fra{" "}
        <span className="bg-yellow-200 text-2xl p-0.5 rounded-md">399,-</span>{" "}
        inkludert leie av utstyr! Spar
        <span className="text-red-500 font-bold text-3xl"> 8244,-</span>
      </p>
      <Link href="/form">
        <Table allowOverflow className="rounded-md">
          <TableBody className="divide-y ">
            <TableRow className="text-base bg-green-100 border-l-4 border-green-500">
              <TableCell className="">
                <Image
                  src="/logo-next-icon.png"
                  alt="Telenor Logo"
                  width={30}
                  height={30}
                  className="grayscale"
                />
              </TableCell>
              <TableCell className="text-center leading-tight text-md ">
                Bredbånd
              </TableCell>
              <TableCell className="text-center leading-tight">
                50 - 1000
                <span className="text-sm"> mbps</span>
              </TableCell>
              <TableCell className="space-y-1 font-semibold relative">
                <span className="absolute -top-3 right-0 bg-green-500 text-white text-xs py-1 px-2 mr-1 rounded-full z-10">
                  Billigst
                </span>
                399,-
                <div className="text-xs text-gray-500 line-through">899,-</div>
              </TableCell>
            </TableRow>
            <TableRow
              className="text-base bg-white
            "
            >
              <TableCell className="">
                <Image
                  src="/logo-telenor-icon.png"
                  alt="Telenor Logo"
                  width={30}
                  height={30}
                  className="grayscale"
                />
              </TableCell>
              <TableCell className="text-center leading-tight text-md ">
                Bredbånd
              </TableCell>
              <TableCell className="text-center leading-tight">
                100 - 1000
                <span className="text-sm"> mbps</span>
              </TableCell>
              <TableCell className="space-y-1 font-semibold">
                599,-
                <div className="text-xs text-gray-500 line-through">899,-</div>
                {/* <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button> */}
              </TableCell>
            </TableRow>
            <TableRow className="text-base bg-gray-50">
              <TableCell className="">
                <Image
                  src="/logo-telia-icon.png"
                  alt="Telenor Logo"
                  width={30}
                  height={30}
                  className="grayscale"
                />
              </TableCell>
              <TableCell className="text-center leading-tight text-md ">
                Bredbånd
              </TableCell>
              <TableCell className="text-center leading-tight">
                100 - 1250
                <span className="text-sm"> mbps</span>
              </TableCell>
              <TableCell className="space-y-1 font-semibold">
                829,-
                <div className="text-xs text-gray-500 line-through">899,-</div>
                {/* <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button> */}
              </TableCell>
            </TableRow>
            <TableRow className="text-base bg-white">
              <TableCell className="">
                <Image
                  src="/logo-alti-icon.png"
                  alt="Telenor Logo"
                  width={30}
                  height={30}
                  className="grayscale"
                />
              </TableCell>
              <TableCell className="text-center leading-tight text-md ">
                Bredbånd
              </TableCell>
              <TableCell className="text-center leading-tight">
                100 - 1000
                <span className="text-sm"> mbps</span>
              </TableCell>
              <TableCell className="space-y-1 font-semibold">
                779,-
                <div className="text-xs text-gray-500 line-through">899,-</div>
                {/* <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button> */}
              </TableCell>
            </TableRow>
            <TableRow className="text-base bg-red-100 border-l-4 border-red-500 relative">
              <TableCell className="">
                <Image
                  src="/logo-telenor-icon.png"
                  alt="Telenor Logo"
                  width={30}
                  height={30}
                  className="grayscale"
                />
              </TableCell>
              <TableCell className="text-center leading-tight text-md ">
                Bredbånd & T-We
              </TableCell>
              <TableCell className="text-center leading-tight">
                100 - 1000 <span className="text-sm"> mbps</span>
              </TableCell>
              <TableCell className="space-y-1 font-semibold relative">
                <span className="absolute -top-3 right-0 mr-1 bg-red-500 text-white text-xs py-1 px-2 rounded-full z-10 whitespace-nowrap">
                  Populær
                </span>
                799,-
                <div className="text-xs text-gray-500 line-through">1426,-</div>
              </TableCell>
            </TableRow>

            <TableRow className="text-base bg-white">
              <TableCell className="">
                <Image
                  src="/logo-telia-icon.png"
                  alt="Telenor Logo"
                  width={30}
                  height={30}
                  className="grayscale"
                />
              </TableCell>
              <TableCell className="text-center leading-tight text-md ">
                Bredbånd & Play
              </TableCell>
              <TableCell className="text-center leading-tight">
                100 - 1250 <span className="text-sm"> mbps</span>
              </TableCell>
              <TableCell className="space-y-1 font-semibold">
                1135,-
                <div className="text-xs text-gray-500 line-through">1426,-</div>
                {/* <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button> */}
              </TableCell>
            </TableRow>

            <TableRow className="text-base bg-gray-50">
              <TableCell className="">
                <Image
                  src="/logo-alti-icon.png"
                  alt="Telenor Logo"
                  width={30}
                  height={30}
                  className="grayscale"
                />
              </TableCell>
              <TableCell className="text-center leading-tight text-md ">
                Bredbånd & TV
              </TableCell>
              <TableCell className="text-center leading-tight">
                150 - 1000 <span className="text-sm"> mbps</span>
              </TableCell>
              <TableCell className="space-y-1 font-semibold">
                1135,-
                <div className="text-xs text-gray-500 line-through">1426,-</div>
                {/* <Button variant={"ghost"} size="icon">
                  <ArrowRight />
                </Button> */}
              </TableCell>
            </TableRow>

            {/* <TableRow className="text-base bg-white">
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
            </TableRow> */}
          </TableBody>
        </Table>
      </Link>
      <p className="justify-start text-3xl py-2 px-4"></p>
    </div>
  );
}
