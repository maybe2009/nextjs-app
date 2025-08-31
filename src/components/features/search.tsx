"use client";

import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value;
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      console.log(`${pathname}?${params.toString()}`);
      replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <div className="bg-surface-dark inline-flex items-center w-[344px] rounded-[999px] gap-x-2 pl-4 pr-4 pt-3 pb-3">
      <img src="/icons/search.svg" alt="search" className="w-[15px] h-[15px]" />
      <input
        className="w-full outline-none customize-text-body-bold text-text-secondary"
        type="text"
        onChange={handleSearchChange}
        defaultValue={searchParams.get("query") || ""}
      />
    </div>
  );
}
